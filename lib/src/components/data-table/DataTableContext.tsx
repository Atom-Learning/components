import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { SortingState, Table } from '@tanstack/react-table'

type DataTableContextType<T = unknown> = Table<T> & {
  setUserSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  userSortable: boolean
}

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

type TableProviderProps = {
  columns
  data: Array<Record<string, unknown>>
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
}

export const DataTableProvider = ({
  columns,
  data,
  defaultSort,
  children
}: TableProviderProps): JSX.Element => {
  const [isPaginated, setIsPaginated] = React.useState<boolean>(false)
  const [userSortable, setUserSortable] = React.useState<boolean>(false)
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
      userSortable || sorting.length ? getSortedRowModel() : undefined,
    state: { sorting },
    onSortingChange: setSorting
  })

  const value = React.useMemo(() => {
    return {
      ...table,

      setUserSortable,
      applyPagination,
      getTotalRows,
      userSortable
    }
  }, [table, applyPagination, getTotalRows, userSortable])

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
