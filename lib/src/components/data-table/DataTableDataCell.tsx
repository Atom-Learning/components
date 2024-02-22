import type { Cell } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'
import * as React from 'react'

import { Table } from '../table'

type DataTableDataCellProps = {
  cell: Cell<Record<string, unknown>, unknown>
}

export const DataTableDataCell = ({ cell }: DataTableDataCellProps) => {
  return (
    <Table.Cell key={cell.id}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Table.Cell>
  )
}
