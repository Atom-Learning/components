import type { Row } from '@tanstack/react-table'
import * as React from 'react'

import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { DataTableRowSelectionCheckbox } from './DataTableRowSelectionCheckbox'
export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  const { allowRowSelection } = useDataTable()
  return (
    <Table.Row>
      {allowRowSelection && row.getCanSelect() && (
        <DataTableRowSelectionCheckbox
          isChecked={row.getIsSelected()}
          onCheckedChange={row.toggleSelected}
        />
      )}
      {row.getVisibleCells().map((cell, i) => {
        return <DataTableDataCell key={cell.id} cell={cell} />
      })}
    </Table.Row>
  )
}
