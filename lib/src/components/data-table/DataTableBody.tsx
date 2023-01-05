import * as React from 'react'

import { Table } from '../table'
import { DataTable } from '.'
import { useDataTable } from './DataTableContext'
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

  if (isDragAndDrop)
    return (
      <Table.Body {...props} striped={striped}>
        <SortableContainer>
          <Rows />
        </SortableContainer>
      </Table.Body>
    )

  return (
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
