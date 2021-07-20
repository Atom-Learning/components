import { styled } from '~/stitches'

export const TableCell = styled('td', {
  borderBottom: '1px solid $tonal200',
  color: '$tonal600',
  fontFamily: '$sans',
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle'
})

TableCell.displayName = 'TableCell'
