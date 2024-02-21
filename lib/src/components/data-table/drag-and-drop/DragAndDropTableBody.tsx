import * as React from 'react'

import { Table } from '../../table'
import { useDataTable } from '../DataTableContext'
import { DragAndDropTableRow } from './DragAndDropTableRow'

export const DragAndDropTableBody = ({
  striped = false,
  idColumn = 'id',
  ...props
}: DataTableBodyProps) => {
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
