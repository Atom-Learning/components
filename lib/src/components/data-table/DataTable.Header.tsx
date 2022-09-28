import { flexRender } from '@tanstack/react-table'
import type { Header } from '@tanstack/react-table'
import * as React from 'react'
import { Flex } from '../flex'
import { Table } from '../table'
import { Icon } from '../icon'
import { SortDown, SortUp } from '@atom-learning/icons'

import { useDataTable } from './DataTableContext'
type DataTableHeaderProps = React.ComponentProps<typeof Table.HeaderCell> & {
  header: Header<Record<string, unknown>, unknown>
}

const sortIcons = {
  asc: (
    <Icon is={SortUp} size="sm" css={{ position: 'absolute', left: '$1' }} />
  ),
  desc: (
    <Icon is={SortDown} size="sm" css={{ position: 'absolute', left: '$1' }} />
  )
}

export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  header,
  children,
  css,
  ...props
}) => {
  const sort = header.column.getIsSorted()
  const { userSortable } = useDataTable()

  return (
    <Table.HeaderCell
      onClick={
        userSortable ? header.column.getToggleSortingHandler() : undefined
      }
      css={{ cursor: userSortable ? 'pointer' : 'initial', ...css }}
      {...props}
    >
      <Flex css={{ alignItems: 'center' }}>
        {flexRender(header.column.columnDef.header, header.getContext())}
        {sort && userSortable && (
          <Flex css={{ position: 'relative', alignItems: 'center' }}>
            {sortIcons[sort as string]}
          </Flex>
        )}
      </Flex>
    </Table.HeaderCell>
  )
}
