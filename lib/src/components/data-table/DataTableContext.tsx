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
  TFetcherOptions,
  TFetcherResult,
  ApiQueryStatus
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
  | { data: Array<Record<string, unknown>>; fetcher?: never }
  | {
      data?: never
      fetcher: (options: TFetcherOptions) => Promise<TFetcherResult | undefined>
    }
)

const defaultPaginationState: PaginationState = { pageIndex: 0, pageSize: 10 }

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

export const DataTableProvider = ({
  columns,
  data: dataProp,
  fetcher,
  defaultSort,
  initialState = undefined,
  children,
  css
}: TableProviderProps): JSX.Element => {
  const [data, setData] = React.useState<TFetcherResult>({
    results: dataProp ?? [],
    total: dataProp?.length ?? 0
  })

  const [isPaginated, setIsPaginated] = React.useState<boolean>(
    !!initialState?.pagination
  )
  const [apiQueryStatus, setApiQueryStatus] = React.useState<ApiQueryStatus>(
    ApiQueryStatus.NONE
  )

  const [paginationState, setPagination] = React.useState<
    PaginationState | undefined
  >(
    fetcher
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

  const doFetchData = React.useCallback(
    async ({
      pageIndex: overridePageIndex,
      pageSize: overridePageSize,
      sortBy: overrideSortBy,
      sortDirection: overrideSortDirection
    }) => {
      if (!fetcher) return

      const getSortDirection = () => {
        if (sorting[0]) {
          if (sorting[0].desc) return 'desc'

          return 'asc'
        }

        return null
      }

      try {
        setApiQueryStatus(ApiQueryStatus.PENDING)

        const { pageIndex, pageSize } = paginationState as PaginationState
        const newData = await fetcher({
          pageIndex: overridePageIndex ?? pageIndex,
          pageSize: overridePageSize ?? pageSize,
          sortBy: overrideSortBy ?? sorting[0]?.id,
          sortDirection: overrideSortDirection ?? getSortDirection()
        })

        invariant(
          Array.isArray(newData?.results),
          'The fetcher function must return an object with a property `result` which must be an array'
        )
        invariant(
          newData && Number.isInteger(newData.total) && newData.total >= 0,
          'The fetcher function must return an object with a property `total` which must be a positive integer or zero'
        )

        setData(newData as TFetcherResult)
        setApiQueryStatus(ApiQueryStatus.SUCCEDED)
      } catch (error) {
        setApiQueryStatus(ApiQueryStatus.FAILED)
      }
    },
    [fetcher, paginationState?.pageIndex, paginationState?.pageSize, sorting]
  )

  React.useEffect(() => {
    doFetchData({})
  }, [doFetchData])

  const getTotalRows = () => data.total

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: paginationState
      ? Math.ceil(getTotalRows() / paginationState.pageSize)
      : -1,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: fetcher && isPaginated,
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
      apiQueryStatus,
      doFetchData
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
