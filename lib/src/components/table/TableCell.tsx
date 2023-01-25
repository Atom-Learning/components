import { styled } from '~/stitches'

export const TableCell = styled('td', {
  borderBottom: '1px solid $tonal100',
  boxSizing: 'border-box',
  color: '$tonal400',
  fontFamily: '$body',
  lineHeight: 1.5,
  p: '$2 $3', //huh
  textAlign: 'left',
  verticalAlign: 'middle',
  '&:first-child': { fontWeight: 'bold' }
})

TableCell.displayName = 'TableCell'
