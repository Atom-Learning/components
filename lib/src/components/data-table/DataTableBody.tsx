import * as React from 'react'

import { Table } from '../table'
import { DataTable } from '.'
import { useDataTable } from './DataTableContext'

type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
>

export const DataTableBody = ({
  striped = false,
  ...props
}: DataTableBodyProps) => {
  const { getRowModel } = useDataTable()

  return (
    <Table.Body {...props} striped={striped}>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
