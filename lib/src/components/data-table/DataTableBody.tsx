import * as React from 'react'

import { Table } from '../table'
import { DataTable } from '.'
import { ApiQueryStatus } from './DataTable.types'
import { useDataTable } from './DataTableContext'

type DataTableBodyProps = Omit<
  React.ComponentProps<typeof Table.Body>,
  'children'
>

export const DataTableBody: React.FC<DataTableBodyProps> = ({
  striped = false,
  ...props
}) => {
  const { getRowModel, apiQueryStatus } = useDataTable()

  if (apiQueryStatus === ApiQueryStatus.FAILED) return null

  return (
    <Table.Body {...props} striped={striped}>
      {getRowModel().rows.map((row) => {
        return <DataTable.Row row={row} key={row.id} />
      })}
    </Table.Body>
  )
}
