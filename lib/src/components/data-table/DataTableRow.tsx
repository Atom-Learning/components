import type { Row } from '@tanstack/react-table'
import * as React from 'react'
import { ChevronRight, ChevronDown } from '@atom-learning/icons'
import { styled } from '~/stitches'

import { Table } from '../table'
import { useDataTable } from './DataTableContext'
import { DataTableDataCell } from './DataTableDataCell'
import { DataTableRowSelectionCheckbox } from './DataTableRowSelectionCheckbox'
import { Icon } from '../icon'
import { Box } from '../box'

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
  const { enableRowSelection, getCanSomeRowsExpand } = useDataTable()

  const toggleExpandHandler = row.getToggleExpandedHandler()
  const toggleSelectHandler = row.getToggleSelectedHandler()

  const getCheckedState = (): boolean | 'indeterminate' => {
    if (row.getIsSomeSelected()) return 'indeterminate'
    return row.getIsSelected()
  }

  return (
    <StyledRow isSelected={row.getIsSelected()}>
      {getCanSomeRowsExpand() && (
        <Table.Cell
          data-testid={`expand-icon-${row.id}`}
          css={{ width: '$4', cursor: row.getCanExpand() ? 'pointer' : 'auto' }}
          onClick={toggleExpandHandler}
        >
          {row.getCanExpand() && (
            <Icon is={row.getIsExpanded() ? ChevronDown : ChevronRight} />
          )}
        </Table.Cell>
      )}

      {enableRowSelection && row.getCanSelect() && (
        <Table.Cell css={{ width: '$4' }}>
          <DataTableRowSelectionCheckbox
            rowDepth={row.depth}
            rowId={row.id}
            checked={getCheckedState()}
            onCheckedChange={toggleSelectHandler}
          />
        </Table.Cell>
      )}
      {row.getVisibleCells().map((cell, i) => {
        return <DataTableDataCell key={cell.id} cell={cell} />
      })}
    </StyledRow>
  )
}
