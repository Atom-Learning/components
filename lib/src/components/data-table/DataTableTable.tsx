import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'
import { DataTableLoading } from './DataTableLoading'

export type DataTableTableProps = Omit<
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
  css,
  ...props
}) => {
  const { asyncDataState } = useDataTable()
  const isPending = asyncDataState === AsyncDataState.PENDING

  return (
    <>
      <DataTableLoading />
      <Table
        {...props}
        css={{
          ...css,
          ...(isPending && {
            opacity: 0.5,
            pointerEvents: 'none',
            transition: 'opacity 250ms linear 150ms'
          })
        }}
      >
        <DataTable.Head theme={theme} sortable={sortable} />
        <DataTable.Body striped={striped} />
      </Table>
    </>
  )
}
