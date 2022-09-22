import * as React from 'react'

import { Table } from '../table'

import { useDataTable } from './DataTableContext'
import { DataTable } from './index'

type DataTableHeadProps = Omit<
  React.ComponentProps<typeof Table.Header>,
  'children'
> & {
  defaultSort?: { column: string; direction: 'asc' | 'desc' }
  userSortable?: boolean
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({
  userSortable = true,
  defaultSort = null,
  theme = 'light',
  ...props
}) => {
  const { getHeaderGroups, setUserSortable, setSorting } = useDataTable()

  React.useEffect(() => {
    setUserSortable(userSortable)
  }, [userSortable, setUserSortable])

  React.useEffect(() => {
    if (defaultSort)
      setSorting([
        { id: defaultSort?.column, desc: defaultSort?.direction === 'desc' }
      ])
  }, [defaultSort, setSorting])

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
