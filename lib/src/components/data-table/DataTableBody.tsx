import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './'
import { useDataTable } from './context'
type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
>
export const DataTableBody: React.FC<DataTableBodyProps> = (props) => {
  const { getRowModel } = useDataTable()

  return (
    <Table.Body {...props}>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
