import * as React from 'react'

import { DataTableBody } from './DataTableBody'
import { DataTableDataCell } from './DataTableDataCell'
import { DataTableProvider } from './DataTableContext'
import { DataTableHead } from './DataTableHead'
import { DataTableHeader } from './DataTableHeader'
import { DataTableRow } from './DataTableRow'
import { DataTableTable } from './DataTableTable'
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

  Header: typeof DataTableHeader
  /** Default pagination implementation for `DataTable`
   *
   * Can navigate forward, backward, or to any specific page. If you need more customisation options,
   * you can build your own implementation with `useDataTable` and other UI components.
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
}

export const DataTable: TDataTable = (props) => <DataTableProvider {...props} />

DataTable.Body = DataTableBody
DataTable.DataCell = DataTableDataCell
DataTable.Head = DataTableHead
DataTable.Header = DataTableHeader
DataTable.Pagination = Pagination
DataTable.Row = DataTableRow
DataTable.Table = DataTableTable
