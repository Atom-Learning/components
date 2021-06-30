import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  bg: '$secondary',
  color: 'white',
  fontFamily: '$body',
  fontWeight: 600,
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle'
})

TableHeaderCell.displayName = 'TableHeaderCell'
