import * as React from 'react'

import { DataTable } from '.'
import { DataTableRowProps } from './DataTableRow'
import { useDataTable } from './DataTableContext'
import { DragAndDropContainer } from './drag-and-drop'
import { Table } from '../table'
import { SortableContainer } from './drag-and-drop'
type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
> &
  Pick<DataTableRowProps, 'reorderable'>

export const DataTableBody: React.FC<DataTableBodyProps> = ({
  striped = false,
  ...props
}) => {
  const { getRowModel, isDragAndDrop } = useDataTable()

  return isDragAndDrop ? (
    <Table.Body {...props} striped={striped}>
      <SortableContainer>
        {getRowModel().rows.map((row) => {
          return <DataTable.Row row={row} key={row.id} />
        })}
      </SortableContainer>
    </Table.Body>
  ) : (
    <Table.Body {...props} striped={striped}>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
