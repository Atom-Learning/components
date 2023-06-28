import type { Row } from '@tanstack/react-table'
import * as React from 'react'

import { Table, StyledTableBody } from '../table'
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
        // this rule needs to be formatted this way in order to avoid using !important to set the bg.
        // the bg property is set elsewhere and it's more specific than this one would be without targetting it this way.
        // the :nth-child ones are needed to catch the rows in striped tables, for which the original bg rules are even more specific (due to the pseudo-selectors)
        [`${StyledTableBody} &, ${StyledTableBody} &:nth-child(2n),
        ${StyledTableBody} &:nth-child(2n+1)`]: {
          bg: '$blue100'
        }
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
            rowIndex={row.index}
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
