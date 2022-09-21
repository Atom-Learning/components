import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'

type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children'
> & {
  sortable?: boolean
}

export const DataTableTable: React.FC<DataTableTableProps> = ({
  sortable = true,
  ...props
}) => (
  <Table {...props}>
    <DataTable.Head sortable={sortable} />
    <DataTable.Body />
  </Table>
)
