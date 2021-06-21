import * as React from 'react'

import { styled } from '~/stitches'
import { CSSWrapper } from '~/utilities'

import { Body } from './Body'
import { Cell } from './Cell'
import { Footer } from './Footer'
import { Header } from './Header'
import { HeaderCell } from './HeaderCell'
import { Row } from './Row'

// type TableProps = {}

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

export const Table: React.FC<React.ComponentProps<typeof CSSWrapper>> &
  TableSubComponents = ({ children, css }) => (
  <CSSWrapper css={css}>
    <StyledTable>{children}</StyledTable>
  </CSSWrapper>
)

Table.Body = Body
Table.Cell = Cell
Table.Footer = Footer
Table.Header = Header
Table.HeaderCell = HeaderCell
Table.Row = Row

Table.displayName = 'Table'
