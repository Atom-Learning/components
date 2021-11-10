import * as React from 'react'

import { styled } from '~/stitches'

import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableFooterCell } from './TableFooterCell'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { TableRow } from './TableRow'

type TableSubComponents = {
  Body: typeof TableBody
  Cell: typeof TableCell
  Footer: typeof TableFooter
  FooterCell: typeof TableFooterCell
  Header: typeof TableHeader
  HeaderCell: typeof TableHeaderCell
  Row: typeof TableRow
}

const StyledTable = styled('table', {
  borderCollapse: 'collapse',
  fontFamily: '$sans',
  fontSize: '$sm',
  width: '100%',
  variants: {
    size: {
      md: {
        [`${TableCell}`]: {
          height: '$4'
        },
        [`${TableHeaderCell}`]: {
          height: '$4'
        }
      },
      lg: {
        [`${TableCell}`]: {
          height: '$5'
        },
        [`${TableHeaderCell}`]: {
          height: '$5'
        }
      }
    }
  }
})

type TableProps = React.ComponentProps<typeof StyledTable>

export const Table: React.FC<TableProps> & TableSubComponents = ({
  size = 'md',
  ...rest
}: TableProps) => <StyledTable size={size} {...rest} />

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.FooterCell = TableFooterCell
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

Table.displayName = 'Table'
