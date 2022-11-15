import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import type { SortingState, PaginationState } from '@tanstack/react-table'

import { DataTableContextType, DataTableContext } from './DataTable.types'

type TFetcherResult = {
  total: number
  results: Array<Record<string, unknown>>
}

type TTableProviderProps = {
  columns
  defaultPageSize?: number
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
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
  children
}): JSX.Element => {
  const [data, setData] = React.useState<TFetcherResult>({
    results: [],
    total: 0
  })
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

  React.useEffect(() => {
    const doFetch = async () => {
      const newData = await fetcher(
        pageIndex,
        pageSize,
        sorting[0]?.id,
        sorting[0] ? (sorting[0].desc ? 'desc' : 'asc') : null
      )

      setData(newData)
    }
    doFetch()
  }, [fetcher, pageIndex, pageSize, sorting])

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: Math.ceil(data.total / pageSize),
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

  const value = React.useMemo(
    () => ({
      ...table,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable
    }),
    [table, applyPagination, getTotalRows, isSortable]
  )

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
