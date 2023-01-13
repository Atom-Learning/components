import * as React from 'react'

import { Table } from '../../table'
import { useDataTable } from '../DataTableContext'
import { DraggableRow } from './DraggableRow'

type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
>

export const DataTableBody: React.FC<DataTableBodyProps> = ({
  striped = false,
  ...props
}) => {
  const { getRowModel } = useDataTable()
  return (
    <Table.Body {...props} striped={striped}>
      {getRowModel().rows.map((row) => {
        return <DraggableRow row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
