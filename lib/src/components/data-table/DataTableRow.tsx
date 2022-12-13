import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { Handle } from './drag-and-drop'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import type { UniqueIdentifier } from '@dnd-kit/core'
import { styled } from '~/stitches'
import { flexRender } from '@tanstack/react-table'
export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  const { isDragAndDrop } = useDataTable()

  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
    isDragging
  } = useSortable({
    id: row.original.id as UniqueIdentifier
  })

  return (
    <Table.Row
      ref={setNodeRef}
      css={{
        transform: CSS.Transform.toString(transform),
        // Online examples apply the transition to all rows, but here it causes a bug where
        // the displaced rows move a second time on drag end
        // transition,
        zIndex: isDragging ? 5 : undefined
      }}
    >
      {row.getVisibleCells().map((cell, i) => {
        if (isDragAndDrop && i === 0) {
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
