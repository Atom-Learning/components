import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
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
import { CSS } from '~/stitches'

import {
  DataTableContextType,
  TAsyncDataOptions,
  TAsyncDataResult,
  AsyncDataState,
  TGetAsyncData
} from './DataTable.types'
import { Box } from '../box'
import { DataTableLoading } from './DataTableLoading'
import { getNewAsyncData } from './getNewAsyncData'

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
  initialState?: InitialState
  css?: CSS
} & (
  | { data: Array<Record<string, unknown>>; getAsyncData?: never }
  | { data?: never; getAsyncData: TGetAsyncData }
)

const defaultPaginationState: PaginationState = { pageIndex: 0, pageSize: 10 }

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

export const DataTableProvider = ({
  columns,
  data: dataProp,
  getAsyncData,
  defaultSort,
  initialState = undefined,
  children,
  css
}: TableProviderProps): JSX.Element => {
  const [data, setData] = React.useState<TAsyncDataResult>({
    results: dataProp ?? [],
    total: dataProp?.length ?? 0
  })

  const [isPaginated, setIsPaginated] = React.useState<boolean>(
    !!initialState?.pagination
  )
  const [asyncDataState, setAsyncDataState] = React.useState<AsyncDataState>(
    AsyncDataState.NONE
  )

  const [paginationState, setPagination] = React.useState<
    PaginationState | undefined
  >(
    getAsyncData
      ? {
          ...defaultPaginationState,
          ...initialState?.pagination
        }
      : initialState?.pagination
  )

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
          sorting
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
      sorting
    ]
  )

  React.useEffect(() => {
    runAsyncData({})
  }, [runAsyncData])

  const getTotalRows = () => data.total

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: paginationState
      ? Math.ceil(getTotalRows() / paginationState.pageSize)
      : -1,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: getAsyncData && isPaginated,
    manualSorting: getAsyncData && isPaginated,
    enableSorting: asyncDataState !== AsyncDataState.PENDING,
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    onPaginationChange: isPaginated ? setPagination : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    initialState: initialState,
    state: {
      sorting,
      pagination: paginationState
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel()
  })

  const value = React.useMemo(() => {
    return {
      ...table,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable,
      asyncDataState,
      runAsyncData
    }
  }, [table, applyPagination, getTotalRows, isSortable])

  return (
    <Box css={{ position: 'relative', ...css }}>
      <DataTableContext.Provider value={value}>
        <DataTableLoading />
        {children}
      </DataTableContext.Provider>
    </Box>
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
