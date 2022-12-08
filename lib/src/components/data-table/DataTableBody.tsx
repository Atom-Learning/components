import * as React from 'react'

import { Table } from '../table'
import { DataTable } from '.'
import { useDataTable } from './DataTableContext'
import { DataTableRowProps } from './DataTableRow'
import { SortableContainer } from './drag-and-drop'
type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
>

export const DataTableBody: React.FC<DataTableBodyProps> = ({
  striped = false,
  ...props
}) => {
  const { isDragAndDrop } = useDataTable()

  return isDragAndDrop ? (
    <Table.Body {...props} striped={striped}>
      <SortableContainer>
        <Rows />
      </SortableContainer>
    </Table.Body>
  ) : (
    <Table.Body {...props} striped={striped}>
      <Rows />
    </Table.Body>
  )
}

const Rows = () => {
  const { getRowModel } = useDataTable()
  return (
    <>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </>
  )
}
