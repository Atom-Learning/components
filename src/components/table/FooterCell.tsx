import { styled } from '~/stitches'

export const FooterCell = styled('td', {
  fontFamily: '$sans',
  color: '$primary500',
  fontWeight: 700,
  textAlign: 'left',
  verticalAlign: 'middle',
  p: '$2 $3'
})

FooterCell.displayName = 'FooterCell'
