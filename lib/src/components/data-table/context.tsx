import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Table
} from '@tanstack/react-table'

type DataTableContextType<T = unknown> = Table<T> & {
  applyPagination: () => void
  getTotalRows: () => number
}
const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

type TableProviderProps = {
  columns
  data: Array<Record<string, unknown>>
  children: React.ReactNode
  sortable?: boolean
}

export const DataTableProvider = ({
  columns,
  data,
  children,
  sortable
}: TableProviderProps): JSX.Element => {
  const [isPaginated, setIsPaginated] = React.useState<boolean>(false)

  const applyPagination = () => {
    if (!isPaginated) setIsPaginated(true)
  }

  const getTotalRows = () => data.length

  const table = useReactTable<unknown>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel()
  })

  return (
    <DataTableContext.Provider
      value={{
        ...table,
        applyPagination,
        getTotalRows
      }}
    >
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
