import * as React from 'react'

import { CSS, styled } from '~/stitches'

import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableFooterCell } from './TableFooterCell'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { StyledRow, TableRow } from './TableRow'
import { TableStickyColumnsContainer } from './TableStickyColumnsContainer'

const StyledTable = styled('table', {
  borderCollapse: 'separate',
  borderSpacing: 0,
  fontFamily: '$sans',
  fontSize: '$sm',
  width: '100%',
  variants: {
    size: {
      md: {
        [`${TableCell}, ${TableHeaderCell}, ${TableFooterCell}`]: {
          height: '$4',
          padding: '$1 $3'
        }
      },
      lg: {
        [`${TableCell}, ${TableHeaderCell}, ${TableFooterCell}`]: {
          height: '$5',
          padding: '$2 $3'
        }
      },
      xl: {
        [`${TableCell}, ${TableHeaderCell}, ${TableFooterCell}`]: {
          height: '$6',
          padding: '$4 $3'
        }
      }
    },
    corners: {
      round: {
        [`${TableHeaderCell}`]: {
          '&:first-of-type': { borderTopLeftRadius: '$0' },
          '&:last-of-type': { borderTopRightRadius: '$0' }
        },
        [`${StyledRow}:last-child`]: {
          [`${TableCell}:first-child`]: { borderBottomLeftRadius: '$0' },
          [`${TableCell}:last-child`]: { borderBottomRightRadius: '$0' }
        }
      },
      square: {}
    }
  }
})

type TableProps = React.ComponentProps<typeof StyledTable> & {
  numberOfStickyColumns?: number
  scrollContainerCss?: CSS
  controlColumnCount?: number
  maxRowDepth?: number
}

const TableComponent = ({
  size = 'md',
  corners = 'round',
  numberOfStickyColumns = 0,
  scrollContainerCss,
  controlColumnCount,
  ...rest
}: TableProps) => {
  const tableComponent = <StyledTable size={size} corners={corners} {...rest} />

  if (numberOfStickyColumns) {
    return (
      <TableStickyColumnsContainer
        key={`${controlColumnCount}_control_column`}
        css={scrollContainerCss}
        numberOfStickyColumns={numberOfStickyColumns}
      >
        {tableComponent}
      </TableStickyColumnsContainer>
    )
  }

  return tableComponent
}

export const Table = Object.assign(TableComponent, {
  Body: TableBody,
  Cell: TableCell,
  Footer: TableFooter,
  FooterCell: TableFooterCell,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  Row: TableRow,
  StickyColumnsContainer: TableStickyColumnsContainer
})

TableComponent.displayName = 'Table'
