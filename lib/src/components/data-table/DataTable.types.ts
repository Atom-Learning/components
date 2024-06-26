import type {
  ColumnOrderTableState,
  ColumnPinningTableState,
  ColumnSizingTableState,
  ExpandedTableState,
  FiltersTableState,
  GroupingTableState,
  PaginationTableState,
  Row,
  RowSelectionState,
  RowSelectionTableState,
  SortDirection,
  SortingTableState,
  Table,
  VisibilityTableState
} from '@tanstack/react-table'
import * as React from 'react'
export enum AsyncDataState {
  NONE = 'none',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

export type TAsyncDataResult = {
  total: number
  results: TableData
}

export type TAsyncDataOptions = {
  pageIndex: number
  pageSize: number
  sortBy?: string
  sortDirection?: SortDirection
  globalFilter?: string
}

export type TGetAsyncData = (
  options: TAsyncDataOptions
) => Promise<TAsyncDataResult | undefined>

export type DataTableContextType<T = unknown> = Table<T> & {
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  isSortable: boolean
  asyncDataState?: AsyncDataState
  runAsyncData?: (options: Partial<TAsyncDataOptions>) => Promise<void>
  disabledRows?: Record<string, boolean>
  enableRowSelection?: boolean | ((row: Row<unknown>) => boolean)
  rowSelection: RowSelectionState
  data: TAsyncDataResult
  columns: any
  tableId: string
  /**
   * Directly update the data array that the table rows are built from.
   * This is useful when re-ordering rows, but is high-risk if you're not sure what you're doing!
   *
   *  Note in particular that this value is also updated if you update the value of the `DataTable`'s `data` prop
   *  — it's probably best to only use one of those two methods for any given table.
   */
  setData: React.Dispatch<React.SetStateAction<TAsyncDataResult>>
}

export type TableData = Array<Record<string, unknown>>

export type InitialState = Partial<
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

export type TDefaultSort = { column: string; direction: SortDirection }
