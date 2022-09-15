import { flexRender, Header } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { Icon } from '../icon'
import { ChevronDown, ChevronUp } from '@atom-learning/icons'
type DataTableHeaderCellProps = React.ComponentProps<typeof Table.Header> & {
  header: Header<Record<string, unknown>, unknown>
  sortable?: boolean
}

const sortIcons = {
  asc: <Icon is={ChevronUp} size="sm" css={{ ml: '$1' }} />,
  desc: <Icon is={ChevronDown} size="sm" css={{ ml: '$1' }} />
}

export const DataTableHeaderCell: React.FC<DataTableHeaderCellProps> = ({
  header,
  sortable,
  children,
  ...props
}) => {
  const sort = header.column.getIsSorted()

  return (
    <Table.HeaderCell
      onClick={sortable ? header.column.getToggleSortingHandler() : undefined}
      {...props}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {sort && sortIcons[sort as string]}
    </Table.HeaderCell>
  )
}
