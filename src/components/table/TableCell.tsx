import { styled } from '~/stitches'

export const TableCell = styled('td', {
  borderBottom: '1px solid $tonal100',
  boxSizing: 'border-box',
  color: '$tonal400',
  fontFamily: '$body',
  lineHeight: 1.5,
  p: '$2 $3',
  textAlign: 'left',
  verticalAlign: 'middle',
  '&:first-child': { fontWeight: 'bold' },
  'tr:nth-child(odd) &': {
    bg: 'white'
  },
  'tr:nth-child(even) &': {
    bg: '$tonal50'
  }
})

TableCell.displayName = 'TableCell'
