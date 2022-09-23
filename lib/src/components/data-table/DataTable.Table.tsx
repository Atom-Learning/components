import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'

type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children'
> &
  Partial<
    Pick<React.ComponentProps<typeof DataTable.Head>, 'theme' | 'userSortable'>
  > &
  Partial<Pick<React.ComponentProps<typeof Table.Body>, 'striped'>>

export const DataTableTable: React.FC<DataTableTableProps> = ({
  // defaultSort,
  userSortable,
  striped,
  theme,
  ...props
}) => (
  <Table {...props}>
    <DataTable.Head
      theme={theme}
      // defaultSort={defaultSort}
      userSortable={userSortable}
    />
    <DataTable.Body striped={striped} />
  </Table>
)
