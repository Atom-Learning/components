import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { DragHandle } from './drag-and-drop'
export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
  reorderable?: boolean
}
export const DataTableRow: React.FC<DataTableRowProps> = ({
  row,
  reorderable = false
}) => {
  const { applyDragAndDrop } = useDataTable()

  // TODO: figure out whether this is the right place for this logic.
  // It's going to fire on every row... Should this really be a property of the row,
  // rather than of the table provider itself?
  // What happens if some state in a parent component decides that the table rows
  // should no longer be drag and drop?
  React.useEffect(() => {
    if (reorderable) {
      applyDragAndDrop()
    }
  }, [reorderable])

  return (
    <Table.Row>
      {reorderable && (
        <Table.Cell>
          {/* TODO: decide on label */}
          <DragHandle targetId={row.id} label={row.id} />
        </Table.Cell>
      )}
      {row.getVisibleCells().map((cell) => (
        <DataTableDataCell key={cell.id} cell={cell} />
      ))}
    </Table.Row>
  )
}
