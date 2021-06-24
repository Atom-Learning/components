import { styled } from '~/stitches'

export const HeaderCell = styled('th', {
  p: '$2 $3',
  fontWeight: 700,
  verticalAlign: 'top',
  textAlign: 'left',
  bg: '$primary400',
  color: 'white'
})

HeaderCell.displayName = 'HeaderCell'
