import { styled } from '~/stitches'

export const TableCell = styled('td', {
  borderBottom: '1px solid $tonal200',
  boxSizing: 'border-box',
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle',
  'tr:nth-child(even) &': {
    bg: '$tonal50'
  }
})

TableCell.displayName = 'TableCell'
