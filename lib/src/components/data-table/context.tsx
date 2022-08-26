import * as React from 'react'
import {
  useReactTable,
  TableOptions,
  HeaderGroup,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table'

// TODO: get methods onto context type
// and solve issues with react-table methods being generic / type T not
// being known here at compile time
type DataTableMethods = {}
const DataTableContext = React.createContext<DataTableMethods>({})

type TableProviderProps<T> = {
  columns
  data: any
  options?: TableOptions<T>
  children: React.ReactNode
  sortable?: boolean
}

export const DataTableProvider = <T extends unknown>({
  columns,
  data,
  options,
  children,
  sortable
}: TableProviderProps<T>): JSX.Element => {
  const [sortingState, setSortingState] = React.useState<SortingState>([])
  const [isPaginated, setIsPaginated] = React.useState<boolean>(false)

  const applyPagination = () => setIsPaginated(true)

  const {
    getFooterGroups,
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    nextPage,
    previousPage,
    getPageCount,
    getCanNextPage,
    getCanPreviousPage
  } = useReactTable({
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
      value={{
        applyPagination,
        getFooterGroups,
        getHeaderGroups,
        getRowModel,
        setPageIndex,
        getPageCount,
        nextPage,
        previousPage,
        getCanPreviousPage,
        getCanNextPage
      }}
    >
      {children}
    </DataTableContext.Provider>
  )
}

export const useDataTable = () => {
  const context = React.useContext(DataTableContext)

  if (!context)
    throw new Error(
      'useDataTable can only be called from inside a DataTableProvider'
    )

  return context
}
