import invariant from 'invariant'
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
  PaginationState
} from '@tanstack/react-table'
import { CSS } from '~/stitches'

import {
  DataTableContextType,
  TAsyncDataOptions,
  TAsyncDataResult,
  AsyncDataState
} from './DataTable.types'
import { Box } from '../box'
import { DataTableLoading } from './DataTableLoading'

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
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
  initialState?: InitialState
  css?: CSS
} & (
  | { data: Array<Record<string, unknown>>; asyncData?: never }
  | {
      data?: never
      asyncData: (
        options: TAsyncDataOptions
      ) => Promise<TAsyncDataResult | undefined>
    }
)

const defaultPaginationState: PaginationState = { pageIndex: 0, pageSize: 10 }

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

export const DataTableProvider = ({
  columns,
  data: dataProp,
  asyncData,
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
  const [asyncDataState, setApiQueryStatus] = React.useState<AsyncDataState>(
    AsyncDataState.NONE
  )

  const [paginationState, setPagination] = React.useState<
    PaginationState | undefined
  >(
    asyncData
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
    async ({
      pageIndex: overridePageIndex,
      pageSize: overridePageSize,
      sortBy: overrideSortBy,
      sortDirection: overrideSortDirection
    }) => {
      if (!asyncData) return

      const getSortDirection = () => {
        if (sorting[0]) {
          if (sorting[0].desc) return 'desc'

          return 'asc'
        }

        return null
      }

      try {
        setApiQueryStatus(AsyncDataState.PENDING)

        const { pageIndex, pageSize } = paginationState as PaginationState
        const newData = await asyncData({
          pageIndex: overridePageIndex ?? pageIndex,
          pageSize: overridePageSize ?? pageSize,
          sortBy: overrideSortBy ?? sorting[0]?.id,
          sortDirection: overrideSortDirection ?? getSortDirection()
        })

        invariant(
          Array.isArray(newData?.results),
          'The asyncData function must return an object with a property `result` which must be an array'
        )
        invariant(
          newData && Number.isInteger(newData.total) && newData.total >= 0,
          'The asyncData function must return an object with a property `total` which must be a positive integer or zero'
        )

        setData(newData as TAsyncDataResult)
        setApiQueryStatus(AsyncDataState.FULFILLED)
      } catch (error) {
        setApiQueryStatus(AsyncDataState.REJECTED)
      }
    },
    [asyncData, paginationState?.pageIndex, paginationState?.pageSize, sorting]
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
    manualPagination: asyncData && isPaginated,
    manualSorting: asyncData && isPaginated,
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
