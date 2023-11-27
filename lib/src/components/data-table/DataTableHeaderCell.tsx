import { SortDown, SortUp } from '@atom-learning/icons'
import type { Header } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'
import * as React from 'react'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { Table } from '../table'
import { useDataTable } from './DataTableContext'
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
  const { isSortable: isSortableTable } = useDataTable()
  // false for display columns, e.g. "Actions"
  const isDataColumn = header.column.getCanSort()

  return (
    <Table.HeaderCell
      onClick={
        isSortableTable && isDataColumn
          ? header.column.getToggleSortingHandler()
          : undefined
      }
      css={{
        cursor: isSortableTable && isDataColumn ? 'pointer' : 'initial',
        ...css
      }}
      {...props}
    >
      <Flex align="center">
        {flexRender(header.column.columnDef.header, header.getContext())}
        {sortDirection && isSortableTable && (
          <Flex align="center" css={{ position: 'relative' }}>
            <SortIcon direction={sortDirection} />
          </Flex>
        )}
      </Flex>
    </Table.HeaderCell>
  )
}
