import * as React from 'react'
import { Table } from '../table'
import { Cell, flexRender } from '@tanstack/react-table'

type DataTableDataCellProps = {
  cell: Cell<Record<string, unknown>, unknown>
}

export const DataTableDataCell: React.FC<DataTableDataCellProps> = ({
  cell
}) => {
  return (
    <Table.Cell key={cell.id}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Table.Cell>
  )
}
