import { flexRender, Header } from '@tanstack/react-table'
import * as React from 'react'
import { Table } from '../table'
import { Icon } from '../icon'
import { ChevronDown, ChevronUp } from '@atom-learning/icons'
import { useDataTable } from './DataTableContext'
type DataTableHeaderProps = React.ComponentProps<typeof Table.Header> & {
  header: Header<Record<string, unknown>, unknown>
}

const sortIcons = {
  asc: <Icon is={ChevronUp} size="sm" css={{ ml: '$1' }} />,
  desc: <Icon is={ChevronDown} size="sm" css={{ ml: '$1' }} />
}

export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  header,
  children,
  ...props
}) => {
  const sort = header.column.getIsSorted()
  const { isSortable } = useDataTable()
  return (
    <Table.HeaderCell
      onClick={
        isSortable
          ? (header.column.getToggleSortingHandler() as MouseEventHandler<HTMLTableCellElement>)
          : undefined
      }
      {...props}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {sort && sortIcons[sort as string]}
    </Table.HeaderCell>
  )
}
