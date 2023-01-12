import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../../table'
import { DataTableDataCell } from '../DataTableDataCell'
import { Handle } from './'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import type { UniqueIdentifier } from '@dnd-kit/core'

import { flexRender } from '@tanstack/react-table'
export type DataTableDraggableRowProps = React.ComponentProps<
  typeof Table.Row
> & {
  row: Row<Record<string, unknown>>
}

export const DraggableRow: React.FC<DataTableDraggableRowProps> = ({ row }) => {
  const { attributes, listeners, transform, setNodeRef, isDragging } =
    useSortable({
      id: row.original.id as UniqueIdentifier
    })

  return (
    <Table.Row
      ref={setNodeRef}
      css={{
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 5 : undefined
      }}
    >
      {row.getVisibleCells().map((cell, i) => {
        if (i === 0) {
          return (
            <Table.Cell key={cell.id}>
              {/* TODO: decide on label */}
              <Handle
                {...attributes}
                {...listeners}
                isDragging={isDragging}
                css={{ display: 'inline-block' }}
                label="drag and drop"
              />
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Table.Cell>
          )
        }
        return <DataTableDataCell key={cell.id} cell={cell} />
      })}
    </Table.Row>
  )
}
