import { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { DataTableDataCell } from './DataTable.DataCell'

type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}
export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => (
  <Table.Row>
    {row.getVisibleCells().map((cell) => (
      <DataTableDataCell key={cell.id} cell={cell} />
    ))}
  </Table.Row>
)
