import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../../table'
import { DataTableDataCell } from '../DataTableDataCell'
import { flexRender } from '@tanstack/react-table'
import { Sortable } from '~/components/sortable'
export type DataTableDraggableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

export const DragAndDropTableRow: React.FC<DataTableDraggableRowProps> = ({ row }) => {
  const rowId = row.original.id as React.ReactText
  return (
    <Sortable.Item id={rowId} asChild>
      <Table.Row>
        {row.getVisibleCells().map((cell, i) => {
          if (i === 0) {
            return (
              <Table.Cell key={cell.id}>
                <Sortable.Handle
                  targetId={rowId}
                  css={{ display: 'inline-block' }}
                />
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            )
          }
          return <DataTableDataCell key={cell.id} cell={cell} />
        })}
      </Table.Row>
    </Sortable.Item>
  )
}
