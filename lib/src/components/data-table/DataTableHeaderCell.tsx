import { flexRender } from '@tanstack/react-table'
import type { Header } from '@tanstack/react-table'
import * as React from 'react'
import { Flex } from '../flex'
import { Table } from '../table'
import { Icon } from '../icon'
import { SortDown, SortUp } from '@atom-learning/icons'

import { useDataTable } from './DataTableContext'
import { ApiQueryStatus } from './DataTable.types'
type DataTableHeaderProps = React.ComponentProps<typeof Table.HeaderCell> & {
  header: Header<Record<string, unknown>, unknown>
}

const sortIcons = {
  asc: SortUp,
  desc: SortDown
}

const SortIcon: React.FC<{ direction: 'asc' | 'desc' }> = ({ direction }) => (
  <Icon
    is={sortIcons[direction]}
    size="sm"
    css={{ position: 'absolute', left: '$1' }}
  />
)

export const DataTableHeaderCell: React.FC<DataTableHeaderProps> = ({
  header,
  children,
  css,
  ...props
}) => {
  const sortDirection = header.column.getIsSorted()
  const { isSortable: isSortableTable, apiQueryStatus } = useDataTable()
  // false for display columns, e.g. "Actions"
  const isDataColumn = header.column.getCanSort()
  const isLoading = apiQueryStatus === ApiQueryStatus.PENDING
  const isSortEnabled = isSortableTable && !isLoading
  return (
    <Table.HeaderCell
      onClick={
        isSortEnabled && isDataColumn
          ? header.column.getToggleSortingHandler()
          : undefined
      }
      css={{
        cursor: isSortEnabled && isDataColumn ? 'pointer' : 'initial',
        ...css
      }}
      {...props}
    >
      <Flex css={{ alignItems: 'center' }}>
        {flexRender(header.column.columnDef.header, header.getContext())}
        {sortDirection && isSortEnabled && (
          <Flex css={{ position: 'relative', alignItems: 'center' }}>
            <SortIcon direction={sortDirection} />
          </Flex>
        )}
      </Flex>
    </Table.HeaderCell>
  )
}
