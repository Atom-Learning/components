import { DataTableBody } from './DataTableBody'
import { DataTableHeaderCell } from './DataTableHeaderCell'
import { DataTableProvider } from './context'
import { DataTableHeader } from './DataTableHeader'
import { Pagination } from './pagination'
import { DataTableRow } from './DataTableRow'
import { Table } from '../table'

type TDataTable = typeof Table & {
  Body: typeof DataTableBody
  Header: typeof DataTableHeader
  HeaderCell: typeof DataTableHeaderCell
  Pagination: typeof Pagination
  Provider: typeof DataTableProvider
  Row: typeof DataTableRow
}

export const DataTable: TDataTable = Table

DataTable.Body = DataTableBody
DataTable.Header = DataTableHeader
DataTable.HeaderCell = DataTableHeaderCell
DataTable.Pagination = Pagination
DataTable.Provider = DataTableProvider
DataTable.Row = DataTableRow
