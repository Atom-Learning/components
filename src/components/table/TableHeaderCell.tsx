import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  fontFamily: '$sans',
  color: 'white',
  fontWeight: 700,
  textAlign: 'left',
  verticalAlign: 'middle',
  p: '$2 $3',
  bg: '$primary500'
})

TableHeaderCell.displayName = 'TableHeaderCell'
