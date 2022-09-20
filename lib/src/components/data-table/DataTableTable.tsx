import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'

type DataTableTableProps = Omit<React.ComponentProps<typeof Table>, 'children'>
export const DataTableTable: React.FC<DataTableTableProps> = (props) => (
  <Table {...props}>
    <DataTable.Header sortable />
    <DataTable.Body />
  </Table>
)
