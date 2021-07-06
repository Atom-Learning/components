import { styled } from '~/stitches'

export const TableCell = styled('td', {
  fontFamily: '$sans',
  color: '$tonal600',
  textAlign: 'left',
  verticalAlign: 'middle',
  p: '$2 $3',
  borderBottom: '1px solid $tonal200'
})

TableCell.displayName = 'TableCell'
