import { styled } from '~/stitches'

export const TableCell = styled('td', {
  borderBottom: '1px solid $grey200',
  boxSizing: 'border-box',
  color: '$grey800',
  fontFamily: '$body',
  lineHeight: 1.5,
  textAlign: 'left',
  verticalAlign: 'middle',
  '&:first-child': { fontWeight: '600' }
})

TableCell.displayName = 'TableCell'
