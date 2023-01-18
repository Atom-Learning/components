import * as React from 'react'

import { styled } from '~/stitches'

import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableFooterCell } from './TableFooterCell'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { StyledRow, TableRow } from './TableRow'
import { TableStickyColumnsContainer } from './TableStickyColumnsContainer'

type TableSubComponents = {
  Body: typeof TableBody
  Cell: typeof TableCell
  Footer: typeof TableFooter
  FooterCell: typeof TableFooterCell
  Header: typeof TableHeader
  HeaderCell: typeof TableHeaderCell
  Row: typeof TableRow
  StickyColumnsContainer: typeof TableStickyColumnsContainer
}

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
          height: '$4'
        }
      },
      lg: {
        [`${TableCell}, ${TableHeaderCell}, ${TableFooterCell}`]: {
          height: '$5'
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

type TableProps = React.ComponentProps<typeof StyledTable>

export const Table: React.FC<TableProps> & TableSubComponents = ({
  size = 'md',
  corners = 'round',
  ...rest
}: TableProps) => <StyledTable size={size} corners={corners} {...rest} />

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.FooterCell = TableFooterCell
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow
Table.StickyColumnsContainer = TableStickyColumnsContainer

Table.displayName = 'Table'
