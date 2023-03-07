import * as React from 'react'

import { Table } from '../../table'
import { useDataTable } from '../DataTableContext'
import { DragAndDropTableRow } from './DragAndDropTableRow'

type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
> & { idColumn?: string }

export const DragAndDropTableBody: React.FC<DataTableBodyProps> = ({
  striped = false,
  idColumn = 'id',
  ...props
}) => {
  const { getRowModel } = useDataTable()
  return (
    <Table.Body {...props} striped={striped}>
      {getRowModel().rows.map((row) => {
        return (
          <DragAndDropTableRow row={row} key={row.id} idColumn={idColumn} />
        )
      })}
    </Table.Body>
  )
}
