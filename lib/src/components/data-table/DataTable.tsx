import * as React from 'react'

import { DataTableProvider } from './context'
import { DataTableBody } from './DataTableBody'
import { DataTableHeader } from './DataTableHeader'
import { DataTableHeaderCell } from './DataTableHeaderCell'
import { DataTableRow } from './DataTableRow'
import { Pagination } from './pagination'

type TDataTable = React.FC<React.ComponentProps<typeof DataTableProvider>> & {
  Body: typeof DataTableBody
  Header: typeof DataTableHeader
  HeaderCell: typeof DataTableHeaderCell
  Pagination: typeof Pagination
  Row: typeof DataTableRow
}

// DataTable = Table doesn't work because it overrides
// Table.Body etc with DataTable.Body etc
export const DataTable: TDataTable = (props) => <DataTableProvider {...props} />

// DataTable features that hook into state and logic from provider
DataTable.Pagination = Pagination

// Useful defaults for basic table elements
DataTable.Body = DataTableBody
DataTable.Header = DataTableHeader
DataTable.HeaderCell = DataTableHeaderCell
DataTable.Row = DataTableRow
