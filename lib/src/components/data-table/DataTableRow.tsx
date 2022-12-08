import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { DragHandle } from './drag-and-drop'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import type { UniqueIdentifier } from '@dnd-kit/core'
import { styled } from '~/stitches'
import { flexRender } from '@tanstack/react-table'
export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

const DraggingRow = styled(Table.Cell, {
  background: 'rgba(127, 207, 250, 0.3)'
})
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
        // transition: isDragging ? transition : undefined
        transition: isDragging ? transition : undefined
      }}
    >
      {isDragging ? (
        <DraggingRow colSpan={row.getAllCells().length}>&nbsp;</DraggingRow>
      ) : (
        row.getVisibleCells().map((cell, i) => {
          if (isDragAndDrop && i === 0) {
            return (
              <Table.Cell key={cell.id}>
                {/* TODO: decide on label */}
                <DragHandle {...attributes} {...listeners} />
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            )
          }
          return <DataTableDataCell key={cell.id} cell={cell} />
        })
      )}
    </Table.Row>
  )
}
