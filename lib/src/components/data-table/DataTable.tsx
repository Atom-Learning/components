import * as React from 'react'

import { DataTableBulkActions } from './bulk-actions'
import { DataTableBody } from './DataTableBody'
import { DataTableProvider } from './DataTableContext'
import { DataTableDataCell } from './DataTableDataCell'
import { DataTableEmptyState } from './DataTableEmptyState'
import { DataTableError } from './DataTableError'
import { DataTableGlobalFilter } from './DataTableGlobalFilter'
import { DataTableHead } from './DataTableHead'
import { DataTableHeaderCell } from './DataTableHeaderCell'
import { DataTableLoading } from './DataTableLoading'
import { DataTableMetaData } from './DataTableMetaData'
import { DataTableRow } from './DataTableRow'
import { DataTableRowSelectionCheckbox } from './DataTableRowSelectionCheckbox'
import { DataTableSelectAllRowsCheckbox } from './DataTableSelectAllRowsCheckbox'
import { DataTableTable } from './DataTableTable'
import { DragAndDropTable } from './drag-and-drop'
import { Pagination } from './pagination'

type TDataTable = React.FC<React.ComponentProps<typeof DataTableProvider>> & {
  /** Default table body implementation for `DataTable`.
   *
   * Can be configured with alternating colours of rows. If you need more customisation options,
   * you can build your own implementation with `useDataTable()` and the UI-only `Table` components.
   */
  Body: typeof DataTableBody

  /** Default table data cell implementation for `DataTable`
   *
   *
   */
  DataCell: typeof DataTableDataCell
  /**
   * Used in place of `DataTable.Table` to render a table with rows that the user can sort by drag-and-drop
   */
  DragAndDropTable: typeof DragAndDropTable
  /** Default global search implementation for `DataTable`
   *
   * If you need more customisation options, you can compose your own implementation with our UI-only input components and `useDataTable`.
   */
  GlobalFilter: typeof DataTableGlobalFilter

  /** Default table head implementation
   *
   * Can be configured to be sortable and with different visual themes.
   * If you need more customisation options, you can build your own implementation
   * with `useDataTable` and the UI-only `Table` components.
   */

  Head: typeof DataTableHead
  /** Default header implementation for `DataTable`
   *
   * Can be configured to make the column sortable. If you need more customisation options,
   * you can build your own implementation with the UI-only `Table` components.
   */

  HeaderCell: typeof DataTableHeaderCell
  /** Default pagination implementation for `DataTable`
   *
   * Can navigate forward, backward, or to any specific page. If you need more customisation options,
   * you can build your own implementation with `useDataTable` and other UI components.
   *
   */

  MetaData: typeof DataTableMetaData
  /** Default display of amount of items and current sorting status for 'DataTable'
   *
   */

  Pagination: typeof Pagination
  /** Default row implementation for `DataTable`
   *
   * Renders all visible cells as `Table.Cell`. If you need more customisation options,
   * you can build your own implementation with the UI-only `Table` components.
   */

  Row: typeof DataTableRow

  /** Default table implementation for `DataTable`.
   *
   * Can be configured with sortable columns and different visual themes.
   *
   * If you need more customisation options, you can compose your own implementation with
   * lower-level `DataTable` components or build the whole thing from
   * scratch with `useDataTable` and the UI-only `Table` components.
   *
   */
  Table: typeof DataTableTable

  /** Default loading implementation for remote data
   *
   * Renders a loading component while fetching the paginated data using `getAsyncData`.
   *
   * If you need more customisation, you can compose your own implentation, `asyncDataState`
   * can be retrieved from `useDataTable`
   */
  Loading: typeof DataTableLoading

  /** Default error implementation for remote data
   *
   * Renders an error component when `getAsyncData` promise rejects.
   * Children are rendered as a function, it exposes a `runAsyncData` function to the children component.
   * `runAsyncData()` can be used to retry fetching the paginated data with the current pageIndex, pageSize
   * and sorting parameters or your own custom paginated options.
   *
   * If you need more customisation, you can compose your own implentation, `asyncDataState` and `runAsyncData()`
   * can be retrieved from `useDataTable`
   *
   */
  Error: typeof DataTableError

  /** Empty state implementation for `DataTable`.
   *
   * Extends the EmptyState component
   */
  EmptyState: typeof DataTableEmptyState

  /** Empty state implementation for `DataTable`.
   *
   * Renders a checkbox on the header, allowing for bulk selection/deselection of all selectable rows
   */
  SelectAllRowsCheckbox: typeof DataTableSelectAllRowsCheckbox

  /** Empty state implementation for `DataTable`.
   *
   * Renders a checkbox on the header, allowing for individual selection/deselection of any selectable row
   */
  RowSelectionCheckbox: typeof DataTableRowSelectionCheckbox

  /** Empty state implementation for `DataTable`.
   *
   * Renders a checkbox on the header, allowing for individual selection/deselection of any selectable row
   */
  BulkActions: typeof DataTableBulkActions
}

/** Context provider for DataTable state and logic.
 *
 * Children can call `useDataTable` to access everything provided by `@tanstack/react-table` plus
 * the functionality we've built on top.
 */
export const DataTable: TDataTable = (props) => <DataTableProvider {...props} />

DataTable.Body = DataTableBody
DataTable.DataCell = DataTableDataCell
DataTable.DragAndDropTable = DragAndDropTable
DataTable.Head = DataTableHead
DataTable.HeaderCell = DataTableHeaderCell
DataTable.MetaData = DataTableMetaData
DataTable.Pagination = Pagination
DataTable.Row = DataTableRow
DataTable.GlobalFilter = DataTableGlobalFilter
DataTable.Table = DataTableTable
DataTable.Loading = DataTableLoading
DataTable.Error = DataTableError
DataTable.EmptyState = DataTableEmptyState
DataTable.SelectAllRowsCheckbox = DataTableSelectAllRowsCheckbox
DataTable.RowSelectionCheckbox = DataTableRowSelectionCheckbox
DataTable.BulkActions = DataTableBulkActions
