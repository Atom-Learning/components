import { styled } from '~/stitches'

export const TableHeaderCell = styled('th', {
  color: 'white',
  fontFamily: '$body',
  fontWeight: 600,
  lineHeight: 1.5,
  p: '$2 $3', // huh
  textAlign: 'left',
  verticalAlign: 'middle'
})

TableHeaderCell.displayName = 'TableHeaderCell'
