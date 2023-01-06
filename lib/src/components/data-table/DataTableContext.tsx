import * as React from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'

import type { UniqueIdentifier } from '@dnd-kit/core'

import type {
  VisibilityTableState,
  ColumnOrderTableState,
  ColumnPinningTableState,
  FiltersTableState,
  SortingTableState,
  ExpandedTableState,
  GroupingTableState,
  ColumnSizingTableState,
  PaginationTableState,
  RowSelectionTableState,
  SortingState,
  PaginationState,
  SortDirection
} from '@tanstack/react-table'
import {
  DataTableContextType,
  TAsyncDataOptions,
  TAsyncDataResult,
  AsyncDataState,
  TGetAsyncData
} from './DataTable.types'
import { getNewAsyncData } from './getNewAsyncData'
// type DataTableContextType<T = unknown> = Table<T> & {
//   data: Array<Record<string, unknown>>
//   /**
//    *  Directly update the data array that the table rows are built from.
//    *  This is useful when re-ordering rows, but is high-risk if you're not sure what you're doing!
//    *
//    *  Note in particular that this value is also updated if you update the value of the `DataTable`'s `data` prop
//    *  — it's probably best to only use one of those two methods for any given table.

//    */
//   setData: React.Dispatch<React.SetStateAction<TAsyncDataResult>>
//   setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
//   order: Array<UniqueIdentifier>
//   applyPagination: () => void
//   getTotalRows: () => number
//   idColumn: string
//   isSortable: boolean
//   isDragAndDrop: boolean
//   onDragAndDrop?: (oldIndex: number, newIndex: number, newData: Array<Record<string, unknown>>) => void
//   moveRow: (oldIndex: number, newIndex: number) => void
// }

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

type InitialState = Partial<
  VisibilityTableState &
    ColumnOrderTableState &
    ColumnPinningTableState &
    FiltersTableState &
    SortingTableState &
    ExpandedTableState &
    GroupingTableState &
    ColumnSizingTableState &
    PaginationTableState &
    RowSelectionTableState
>

type TableProviderProps = {
  columns
  defaultSort?: { column: string; direction: SortDirection }
  children: React.ReactNode
  dragAndDrop?:
    | boolean
    | {
        active: boolean
        onChange: (
          oldIndex: number,
          newIndex: number,
          newData: Array<Record<string, unknown>>
        ) => void
      }
  initialState?: InitialState
  idColumn?: string
} & (
  | { data: Array<Record<string, unknown>>; getAsyncData?: never }
  | { data?: never; getAsyncData: TGetAsyncData }
)

const defaultPaginationState: PaginationState = { pageIndex: 0, pageSize: 10 }

export const DataTableProvider = ({
  columns,
  data: dataProp = [],
  dragAndDrop,
  getAsyncData,
  defaultSort,
  initialState = undefined,
  idColumn = 'id',
  children
}: TableProviderProps): JSX.Element => {
  const [data, setData] = React.useState<TAsyncDataResult>({
    results: dataProp ?? [],
    total: dataProp?.length ?? 0
  })

  const [isPaginated, setIsPaginated] = React.useState<boolean>(
    !!initialState?.pagination
  )
  const rowOrder = React.useMemo(
    () => data?.results.map((row, i) => row[idColumn] as UniqueIdentifier),
    [data]
  )
  const isDragAndDrop =
    typeof dragAndDrop === 'boolean'
      ? dragAndDrop
      : dragAndDrop?.active ?? false
  const [asyncDataState, setAsyncDataState] = React.useState<AsyncDataState>(
    AsyncDataState.NONE
  )

  const [globalFilter, setGlobalFilter] = React.useState<string>('')

  const [paginationState, setPagination] = React.useState<
    PaginationState | undefined
  >({
    ...defaultPaginationState,
    ...initialState?.pagination
  })

  const [isSortable, setIsSortable] = React.useState<boolean>(false)

  const [sorting, setSorting] = React.useState<SortingState>(
    defaultSort
      ? [
          {
            id: defaultSort.column,
            desc: defaultSort.direction === 'desc'
          }
        ]
      : []
  )

  const applyPagination = React.useCallback(() => {
    setIsPaginated(true)
  }, [])

  const runAsyncData = React.useCallback(
    async (overrideAsyncDataOptions: Partial<TAsyncDataOptions>) => {
      if (!getAsyncData) return

      try {
        setAsyncDataState(AsyncDataState.PENDING)

        const newData = await getNewAsyncData(
          getAsyncData,
          overrideAsyncDataOptions,
          paginationState as PaginationState,
          sorting,
          globalFilter
        )

        setData(newData as TAsyncDataResult)
        setAsyncDataState(AsyncDataState.FULFILLED)
      } catch (error) {
        setAsyncDataState(AsyncDataState.REJECTED)
      }
    },
    [
      getAsyncData,
      paginationState?.pageIndex,
      paginationState?.pageSize,
      sorting,
      globalFilter
    ]
  )

  React.useEffect(() => {
    runAsyncData({})
  }, [runAsyncData])

  useDeepCompareEffect(() => {
    if (!dataProp) return

    setData({ results: dataProp, total: dataProp.length })
  }, [dataProp])

  const getTotalRows = () => data.total

  const moveRow = (oldIndex: number, newIndex: number) => {
    const maxIndex = data.results.length - 1
    const minIndex = 0
    if ([oldIndex, newIndex].some((i) => i > maxIndex || i < minIndex)) {
      throw new Error(
        `You can't move a row to or from an index that doesn't exist`
      )
    }

    const dataCopy = JSON.parse(JSON.stringify(data))
    const row = dataCopy[oldIndex]

    dataCopy.splice(oldIndex, 1)
    dataCopy.splice(newIndex, 0, row)

    setData(dataCopy)
  }

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: paginationState
      ? Math.ceil(getTotalRows() / paginationState.pageSize)
      : -1,
    initialState: initialState,
    state: {
      sorting,
      globalFilter,
      pagination: paginationState
    },
    manualPagination: getAsyncData && isPaginated,
    manualSorting: getAsyncData && isPaginated,
    enableSorting: asyncDataState !== AsyncDataState.PENDING,
    enableGlobalFilter: !getAsyncData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: isPaginated ? setPagination : undefined,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter
  })

  const value: DataTableContextType = React.useMemo(() => {
    return {
      ...table,
      data,
      idColumn,
      setData,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable,
      isDragAndDrop,
      moveRow,
      rowOrder,
      asyncDataState,
      runAsyncData
    }
  }, [table, applyPagination, getTotalRows, isSortable])

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  )
}

export const useDataTable = <T extends Record<string, unknown>>() => {
  const context = React.useContext(DataTableContext) as DataTableContextType<T>

  if (!context)
    throw new Error(
      'useDataTable can only be called from inside a DataTableProvider'
    )

  return context
}
