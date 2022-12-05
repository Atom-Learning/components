import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'

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
}) => {
  const { asyncDataState } = useDataTable()
  const isPending = asyncDataState === AsyncDataState.PENDING

  return (
    <Table isPending={isPending} {...props}>
      <DataTable.Head theme={theme} sortable={sortable} />
      <DataTable.Body striped={striped} />
    </Table>
  )
}
