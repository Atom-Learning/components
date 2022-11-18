import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import type { SortingState, Table } from '@tanstack/react-table'

import { DataTableContextType, DataTableContext } from './DataTable.types'

type TableProviderProps = {
  columns
  data: Array<Record<string, unknown>>
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
}

export const DataTableProvider = ({
  columns,
  data: dataProp,
  defaultSort,
  children
}: TableProviderProps): JSX.Element => {
  const [data, setData] =
    React.useState<Array<Record<string, unknown>>>(dataProp)
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

  const applyPagination = React.useCallback(() => {
    setIsPaginated(true)
  }, [])

  const getTotalRows = () => data.length

  const table = useReactTable<unknown>({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
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
