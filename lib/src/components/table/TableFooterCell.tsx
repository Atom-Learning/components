import { styled } from '~/stitches'

export const TableFooterCell = styled('td', {
  color: '$tonal400',
  fontFamily: '$body',
  fontWeight: 600,
  p: '$2 $3', //huh
  textAlign: 'left',
  verticalAlign: 'middle'
})

TableFooterCell.displayName = 'TableFooterCell'
