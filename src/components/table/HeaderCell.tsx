import { styled } from '~/stitches'

export const HeaderCell = styled('th', {
  fontFamily: '$sans',
  color: 'white',
  fontWeight: 700,
  textAlign: 'left',
  verticalAlign: 'middle',
  p: '$2 $3',
  bg: '$primary500'
})

HeaderCell.displayName = 'TableHeaderCell'
