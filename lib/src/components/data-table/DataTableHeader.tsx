import * as React from 'react'

import { DataTable } from './index'
import { Table } from '../table'
import { useDataTable } from './DataTableContext'

type DataTableProps = {
  sortable?: boolean
}
export const DataTableHeader: React.FC<DataTableProps> = ({ sortable }) => {
  const { getHeaderGroups } = useDataTable()

  return (
    <Table.Header>
      {getHeaderGroups().map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <DataTable.HeaderCell
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
