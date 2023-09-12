import * as React from 'react'

import { Table } from '../table'
import { DataTableSelectAllRowsCheckbox } from './DataTableSelectAllRowsCheckbox'
import { DataTable, useDataTable } from './index'

type DataTableHeadProps = Omit<
  React.ComponentProps<typeof Table.Header>,
  'children'
> & {
  sortable?: boolean
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({
  sortable = true,
  theme = 'light',
  ...props
}) => {
  const {
    getHeaderGroups,
    setIsSortable,
    enableRowSelection,
    getCanSomeRowsExpand
  } = useDataTable()

  React.useEffect(() => {
    setIsSortable(sortable)
  }, [sortable, setIsSortable])

  return (
    <Table.Header theme={theme} {...props}>
      {getHeaderGroups().map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {getCanSomeRowsExpand() && (
              <Table.HeaderCell css={{ width: '$4' }} />
            )}
            {enableRowSelection && (
              <Table.HeaderCell css={{ width: '$4' }}>
                <DataTableSelectAllRowsCheckbox />
              </Table.HeaderCell>
            )}
            {headerGroup.headers.map((header) => (
              <DataTable.HeaderCell header={header} key={header.id} />
            ))}
          </Table.Row>
        )
      })}
    </Table.Header>
  )
}
