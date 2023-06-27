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
        [`${StyledTableBody} &, ${StyledTableBody} &:nth-child(2n), 
        ${StyledTableBody} &:nth-child(2n+1)`]: {
          bg: '$blue100'
        }
      }
    }
  }
})

export const DataTableRow: React.FC<DataTableRowProps> = ({ row }) => {
  const { allowRowSelection } = useDataTable()

  return (
    <StyledRow isSelected={row.getIsSelected()}>
      {allowRowSelection && row.getCanSelect() && (
        <Table.Cell css={{ width: '$4' }}>
          <DataTableRowSelectionCheckbox
            isChecked={row.getIsSelected()}
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
