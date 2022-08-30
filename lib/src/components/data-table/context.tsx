import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Table
} from '@tanstack/react-table'

// TODO: get methods onto context type
// and solve issues with react-table methods being generic / type T not
// being known here at compile time
type DataTableContext<T extends Record<string, unknown>> = Table<T> & {
  applyPagination: () => void
  getTotalRows: () => number
}
const DataTableContext = React.createContext<DataTableContext | null>(null)

// const createTableContext = <T extends Record<string, unknown>>() => {
//   React.createContext<DataTableContext<T> | null>(null)
// }

type TableProviderProps<T> = {
  columns
  data: Array<T>
  children: React.ReactNode
  sortable?: boolean
}

export const DataTableProvider = <T extends Record<string, unknown>>({
  columns,
  data,
  children,
  sortable
}: TableProviderProps<T>): JSX.Element => {
  // const DataTableContext = createTableContext<T>()
  const [sortingState, setSortingState] = React.useState<SortingState>([])
  const [isPaginated, setIsPaginated] = React.useState<boolean>(false)

  const applyPagination = () => {
    if (!isPaginated) setIsPaginated(true)
  }
  const getTotalRows = () => data.length

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSortingState,
    state: {
      sorting: sortable ? sortingState : undefined
    }
  })

  return (
    <DataTableContext.Provider
      value={{ ...table, applyPagination, getTotalRows }}
    >
      {children}
    </DataTableContext.Provider>
  )
}

export const useDataTable = <T extends Record<string, unknown>>() => {
  const context = React.useContext(DataTableContext)
  console.log('context in hook:', context)

  if (!context)
    throw new Error(
      'useDataTable can only be called from inside a DataTableProvider'
    )

  return context
}
