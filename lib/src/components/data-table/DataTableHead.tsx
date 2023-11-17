import * as React from 'react'

import { CSS } from '~/stitches'

import { Table } from '../table'
import { DataTableSelectAllRowsCheckbox } from './DataTableSelectAllRowsCheckbox'
import { DataTable, useDataTable } from './index'

type DataTableHeadProps = Omit<
  React.ComponentProps<typeof Table.Header>,
  'children'
> & {
  sortable?: boolean
  isSticky?: boolean
  headerCss?: CSS
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({
  sortable = true,
  theme = 'light',
  isSticky = false,
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
    <Table.Header theme={theme} isSticky={isSticky} {...props}>
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
