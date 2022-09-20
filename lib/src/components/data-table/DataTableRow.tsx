import { flexRender, Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { useDataTable } from './DataTableContext'

type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}
export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  return (
    <Table.Row>
      {row.getVisibleCells().map((cell) => (
        <Table.Cell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Table.Cell>
      ))}
    </Table.Row>
  )
}
