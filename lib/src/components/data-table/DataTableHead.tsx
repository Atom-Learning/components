import * as React from 'react'

import { Table } from '../table'
import { TABLE_HEADER_THEMES } from '../table/TableHeader'
import { useDataTable } from './DataTableContext'
import { DataTable } from './index'

type DataTableProps = {
  sortable?: boolean
  theme?: keyof typeof TABLE_HEADER_THEMES
}

export const DataTableHead: React.FC<DataTableProps> = ({
  sortable,
  theme
}) => {
  const { getHeaderGroups } = useDataTable()

  return (
    <Table.Header theme={theme}>
      {getHeaderGroups().map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <DataTable.Header
                header={header}
                key={header.id}
                sortable={sortable}
              />
            ))}
          </Table.Row>
        )
      })}
    </Table.Header>
  )
}
