import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './'
import { useDataTable } from './context'
type DataTableBodyProps = React.ComponentProps<typeof Table.Body>
export const DataTableBody: React.FC<DataTableBodyProps> = () => {
  const { getRowModel } = useDataTable()

  return (
    <Table.Body>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
