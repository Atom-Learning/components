import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  PaginationState
} from '@tanstack/react-table'
import type { SortingState, Table } from '@tanstack/react-table'

import { DataTableContextType, DataTableContext } from './DataTable.types'

type TableProviderProps = {
  columns
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
  fetcher: (
    pageIndex: number,
    pageSize: number,
    sortBy: string,
    sortDirection: 'asc' | 'desc' | null
  ) => Promise<Array<Record<string, unknown>>>
}

export const RemoteDataTableProvider: React.FC<TableProviderProps> = ({
  columns,
  fetcher,
  defaultSort,
  children
}): JSX.Element => {
  const [data, setData] = React.useState<Array<Record<string, unknown>> | null>(
    null
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
      pageSize: 10
    })

  const applyPagination = React.useCallback(() => {
    setIsPaginated(true)
  }, [])

  const getTotalRows = () => data?.length ?? 0

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
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    manualPagination: isPaginated,
    onPaginationChange: isPaginated ? setPagination : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    state: {
      sorting
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
      isSortable
    }
  }, [table, applyPagination, getTotalRows, isSortable])

  console.log('data:', data)

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
