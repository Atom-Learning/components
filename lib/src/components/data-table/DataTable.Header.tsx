import { flexRender, Header } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { Icon } from '../icon'
import { SortDown, SortUp } from '@atom-learning/icons'
import { useDataTable } from './DataTableContext'
type DataTableHeaderProps = React.ComponentProps<typeof Table.HeaderCell> & {
  header: Header<Record<string, unknown>, unknown>
}

const sortIcons = {
  asc: <Icon is={SortUp} size="sm" css={{ ml: '$1' }} />,
  desc: <Icon is={SortDown} size="sm" css={{ ml: '$1' }} />
}

export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  header,
  children,
  ...props
}) => {
  const sort = header.column.getIsSorted()
  const { userSortable } = useDataTable()

  return (
    <Table.HeaderCell
      onClick={
        userSortable ? header.column.getToggleSortingHandler() : undefined
      }
      {...props}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {sort && userSortable && sortIcons[sort as string]}
    </Table.HeaderCell>
  )
}
