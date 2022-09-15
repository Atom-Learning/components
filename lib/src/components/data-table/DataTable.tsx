import * as React from 'react'

import { Table } from '../table'
import { DataTableProvider } from './context'
import { DataTableBody } from './DataTableBody'
import { DataTableHeader } from './DataTableHeader'
import { DataTableHeaderCell } from './DataTableHeaderCell'
import { DataTableRow } from './DataTableRow'
import { Pagination } from './pagination'

type TDataTable = React.FC<React.ComponentProps<typeof Table>> & {
  Body: typeof DataTableBody
  Header: typeof DataTableHeader
  HeaderCell: typeof DataTableHeaderCell
  Pagination: typeof Pagination
  Provider: typeof DataTableProvider
  Row: typeof DataTableRow
}

// The simpler form of DataTable = Table doesn't work because it overrides
// Table.Body etc with DataTable.Body etc
export const DataTable: TDataTable = (props) => <Table {...props} />

DataTable.Body = DataTableBody
DataTable.Header = DataTableHeader
DataTable.HeaderCell = DataTableHeaderCell
DataTable.Pagination = Pagination
DataTable.Provider = DataTableProvider
DataTable.Row = DataTableRow
