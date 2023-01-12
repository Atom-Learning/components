import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { DraggableRow } from './drag-and-drop'
export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  const { isDragAndDrop } = useDataTable()

  if (isDragAndDrop) return <DraggableRow row={row} />

  return (
    <Table.Row>
      {row.getVisibleCells().map((cell, i) => {
        return <DataTableDataCell key={cell.id} cell={cell} />
      })}
    </Table.Row>
  )
}
