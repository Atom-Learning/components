import { styled } from '../../stitches'

export const Link = styled('a', {
  color: '$primary500',
  fontFamily: '$sans',
  fontSize: '$sm',
  textDecoration: 'none',
  cursor: 'pointer',
  ':visited': { color: '$primary500' },
  '&:focus, &:hover': { color: '$primary900', textDecoration: 'underline' },
  ':active': { color: '$primary500' }
})
