import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'
import { DataTableLoading } from './DataTableLoading'
import { Row } from '@tanstack/react-table'

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
  numberOfStickyColumns = 0,
  ...props
}) => {
  const { asyncDataState, getTotalRows, rowSelection } = useDataTable()
  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  if (isEmpty) return null

  return (
    <>
      <DataTableLoading />
      {Object.keys(rowSelection || {}).length > 0 &&  <DataTable.BulkActions />}

      <Table
        {...props}
        numberOfStickyColumns={numberOfStickyColumns}
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
