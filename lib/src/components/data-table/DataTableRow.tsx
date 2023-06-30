import type { Row } from '@tanstack/react-table'
import * as React from 'react'

import { Table } from '../table'
import { DataTableDataCell } from './DataTableDataCell'
import { useDataTable } from './DataTableContext'
import { DataTableRowSelectionCheckbox } from './DataTableRowSelectionCheckbox'
import { styled } from '~/stitches'

export type DataTableRowProps = React.ComponentProps<typeof Table.Row> & {
  row: Row<Record<string, unknown>>
}

const StyledRow = styled(Table.Row, {
  bg: 'initial',
  variants: {
    isSelected: {
      true: {
        // the !important rule is needed because the bg property is set elsewhere and it's more specific than this one would be without the !important modifier.
        bg: '$blue100 !important'
      }
    }
  }
})

export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  const { enableRowSelection } = useDataTable()

  return (
    <StyledRow isSelected={row.getIsSelected()}>
      {enableRowSelection && row.getCanSelect() && (
        <Table.Cell css={{ width: '$4' }}>
          <DataTableRowSelectionCheckbox
            rowId={row.id}
            checked={row.getIsSelected()}
            onCheckedChange={row.toggleSelected}
          />
        </Table.Cell>
      )}
      {row.getVisibleCells().map((cell, i) => {
        return <DataTableDataCell key={cell.id} cell={cell} />
      })}
    </StyledRow>
  )
}
