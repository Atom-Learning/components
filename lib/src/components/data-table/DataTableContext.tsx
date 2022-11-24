import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'

import type { UniqueIdentifier } from '@dnd-kit/core'
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
  Table
} from '@tanstack/react-table'

type DataTableContextType<T = unknown> = Table<T> & {
  data: Array<Record<string, unknown>>
  /**
   *  Directly update the data array that the table rows are built from.
   *  This is useful when re-ordering rows, but is high-risk if you're not sure what you're doing! 

   */
  setData: React.Dispatch<React.SetStateAction<Record<string, unknown>[]>>
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  order: Array<UniqueIdentifier>
  applyPagination: () => void
  applyDragAndDrop: () => void
  getTotalRows: () => number
  isSortable: boolean
  isDragAndDrop: boolean
  moveRow: (oldIndex: number, newIndex: number) => void
}

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

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
  data: Array<Record<string, unknown>>
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  children: React.ReactNode
  dragAndDrop?: boolean
  initialState?: InitialState
}

export const DataTableProvider = ({
  columns,
  data: dataProp,
  dragAndDrop = false,
  defaultSort,
  initialState = undefined,
  children
}: TableProviderProps): JSX.Element => {
  const [data, setData] =
    React.useState<Array<Record<string, unknown>>>(dataProp)
  const order = React.useMemo(
    () => data?.map(({ id }) => id as UniqueIdentifier),
    [data]
  )
  const [isPaginated, setIsPaginated] = React.useState<boolean>(
    !!initialState?.pagination
  )
  const [isSortable, setIsSortable] = React.useState<boolean>(false)
  const [isDragAndDrop, setIsDragAndDrop] = React.useState<boolean>(dragAndDrop)
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

  const applyDragAndDrop = React.useCallback(() => {
    setIsDragAndDrop(true)
  }, [])

  const getTotalRows = () => data.length

  const moveRow = (oldIndex: number, newIndex: number) => {
    const maxIndex = data.length - 1
    const minIndex = 0
    if ([oldIndex, newIndex].some((i) => i > maxIndex || i < minIndex)) {
      throw new Error(`You can't move a row to an index that doesn't exist`)
    }

    const dataCopy = JSON.parse(JSON.stringify(data))
    const row = dataCopy[oldIndex]

    dataCopy.splice(oldIndex, 1)
    dataCopy.splice(newIndex, 0, row)

    setData(dataCopy)
  }

  const table = useReactTable<unknown>({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    initialState: initialState,
    state: {
      sorting
    },

    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel()
  })

  const value = React.useMemo(() => {
    return {
      ...table,
      data,
      setData,
      setIsSortable,
      applyPagination,
      applyDragAndDrop,
      getTotalRows,
      isSortable,
      isDragAndDrop,
      moveRow,
      order
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
