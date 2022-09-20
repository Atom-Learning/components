import * as React from 'react'
import { Table } from '../table'

type DataTableTableProps = React.ComponentProps<typeof Table>
export const DataTableTable: React.FC<DataTableTableProps> = (props) => (
  <Table {...props} />
)
