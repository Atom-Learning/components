import { styled } from '../../stitches'

export const Link = styled('a', {
  color: '$primary500',
  fontFamily: 'sans',
  textDecoration: 'none',
  ':hover': { color: '$primary900' },
  ':active': { color: '$primary900' },
  ':visited': {}
})
