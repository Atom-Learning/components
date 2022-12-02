import * as React from 'react'

import { DataTableBody } from './DataTableBody'
import { DataTableProvider } from './DataTableContext'
import { DataTableDataCell } from './DataTableDataCell'
import { DataTableError } from './DataTableError'
import { DataTableGlobalFilter } from './DataTableGlobalFilter'
import { DataTableHead } from './DataTableHead'
import { DataTableHeaderCell } from './DataTableHeaderCell'
import { DataTableLoading } from './DataTableLoading'
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
   * Renders a loading component while fetching the paginated data in `DataTable.Remote`.
   * This component is included inside `DataTable.Remote`
   *
   * If you need more customisation, you can compose your own implentation, `apiQueryStatus`
   * can be retrieved from `useDataTable`
   */
  Loading: typeof DataTableLoading

  /** Default error implementation for remote data
   *
   * Renders an error component when the api fetch call fails for `DataTable.Remote`.
   * Children are rendered as a function, it exposes a `doFetchData()` to the children component.
   * `doFetchData()` can be used to retry fetching the paginated data with the current pageIndex, pageSize
   * and sorting parameters.
   *
   * If you need more customisation, you can compose your own implentation, `apiQueryStatus` and `doFetchData()
   * can be retrieved from `useDataTable`
   *
   */
  Error: typeof DataTableError
}

/** Context provider for DataTable state and logic.
 *
 * Children can call `useDataTable` to access everything provided by `@tanstack/react-table` plus
 * the functionality we've built on top.
 */
export const DataTable: TDataTable = (props) => <DataTableProvider {...props} />

DataTable.Body = DataTableBody
DataTable.DataCell = DataTableDataCell
DataTable.Head = DataTableHead
DataTable.HeaderCell = DataTableHeaderCell
DataTable.Pagination = Pagination
DataTable.Row = DataTableRow
DataTable.GlobalFilter = DataTableGlobalFilter
DataTable.Table = DataTableTable
DataTable.Loading = DataTableLoading
DataTable.Error = DataTableError
