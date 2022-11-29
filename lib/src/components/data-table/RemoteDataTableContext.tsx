import invariant from 'invariant'
import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import type { SortingState, PaginationState } from '@tanstack/react-table'

import {
  DataTableContextType,
  DataTableContext,
  ApiQueryStatus
} from './DataTable.types'
import { Box } from '../box'

import { DataTableLoading } from './DataTableLoading'
import { CSS } from '~/stitches'

type TFetcherResult = {
  total: number
  results: Array<Record<string, unknown>>
}

type TTableProviderProps = {
  columns
  defaultPageSize?: number
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
  css?: CSS
  fetcher: (
    pageIndex: number,
    pageSize: number,
    sortBy: string,
    sortDirection: 'asc' | 'desc' | null
  ) => Promise<TFetcherResult>
}

export const RemoteDataTableProvider: React.FC<TTableProviderProps> = ({
  columns,
  fetcher,
  defaultSort,
  defaultPageSize = 10,
  children,
  css
}): JSX.Element => {
  const [data, setData] = React.useState<TFetcherResult>({
    results: [],
    total: 0
  })
  const [apiQueryStatus, setApiQueryStatus] = React.useState<ApiQueryStatus>(
    ApiQueryStatus.NONE
  )
  const [isPaginated, setIsPaginated] = React.useState<boolean>(false)
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
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: defaultPageSize
    })

  const applyPagination = React.useCallback(() => {
    setIsPaginated(true)
  }, [])

  const getTotalRows = () => data?.total ?? 0

  const doFetchData = React.useCallback(async () => {
    try {
      setApiQueryStatus(ApiQueryStatus.PENDING)
      const newData = await fetcher(
        pageIndex,
        pageSize,
        sorting[0]?.id,
        sorting[0] ? (sorting[0].desc ? 'desc' : 'asc') : null
      )

      invariant(
        Array.isArray(newData?.results),
        'The fetcher function must return an object with a property `result` which must be an array'
      )

      setData(newData)
      setApiQueryStatus(ApiQueryStatus.SUCCEDED)
    } catch (error) {
      setApiQueryStatus(ApiQueryStatus.FAILED)
    }
  }, [fetcher, pageIndex, pageSize, sorting])

  React.useEffect(() => {
    doFetchData()
  }, [doFetchData])

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: Math.ceil(getTotalRows() / pageSize),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: isPaginated,
    onPaginationChange: isPaginated ? setPagination : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    state: {
      sorting,
      pagination: { pageIndex, pageSize }
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel()
  })

  const value: DataTableContextType<unknown> = React.useMemo(
    () => ({
      ...table,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable,
      apiQueryStatus,
      doFetchData
    }),
    [table, applyPagination, getTotalRows, isSortable]
  )

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
