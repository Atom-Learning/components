import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'

type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children'
> &
  Partial<
    Pick<React.ComponentProps<typeof DataTable.Head>, 'theme' | 'sortable'>
  > &
  Partial<Pick<React.ComponentProps<typeof Table.Body>, 'striped'>>

export const DataTableTable: React.FC<DataTableTableProps> = ({
  sortable,
  striped,
  theme,
  ...props
}) => (
  <Table {...props}>
    <DataTable.Head theme={theme} sortable={sortable} />
    <DataTable.Body striped={striped} />
  </Table>
)
