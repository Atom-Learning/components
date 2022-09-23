import * as React from 'react'

import { Table } from '../table'
import { DataTable, useDataTable } from './index'

type DataTableHeadProps = Omit<
  React.ComponentProps<typeof Table.Header>,
  'children'
> & {
  userSortable?: boolean
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({
  userSortable = true,
  theme = 'light',
  ...props
}) => {
  const { getHeaderGroups, setUserSortable, getState } = useDataTable()

  React.useEffect(() => {
    setUserSortable(userSortable)
  }, [userSortable, setUserSortable])

  return (
    <Table.Header theme={theme} {...props}>
      {getHeaderGroups().map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <DataTable.Header header={header} key={header.id} />
            ))}
          </Table.Row>
        )
      })}
    </Table.Header>
  )
}
