import * as React from 'react'

import { styled } from '~/stitches'

import { Body } from './Body'
import { Cell } from './Cell'
import { Footer } from './Footer'
import { Header } from './Header'
import { HeaderCell } from './HeaderCell'
import { Row } from './Row'

type TableSubComponents = {
  Body: typeof Body
  Cell: typeof Cell
  Footer: typeof Footer
  Header: typeof Header
  HeaderCell: typeof HeaderCell
  Row: typeof Row
}

const StyledTable = styled('table', {
  width: '100%',
  fontFamily: '$sans',
  fontSize: '$sm'
})

type TableProps = React.ComponentProps<typeof StyledTable>

export const Table: React.FC<TableProps> & TableSubComponents = ({
  children,
  ...restProps
}: TableProps) => <StyledTable {...restProps}>{children}</StyledTable>

Table.Body = Body
Table.Cell = Cell
Table.Footer = Footer
Table.Header = Header
Table.HeaderCell = HeaderCell
Table.Row = Row

Table.displayName = 'Table'
