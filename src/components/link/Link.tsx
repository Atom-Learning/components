import * as React from 'react'

import { styled } from '~/stitches'

const StyledLink = styled('a', {
  color: '$primary500',
  fontFamily: '$sans',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:visited': { color: '$primary500' },
  '&:focus, &:hover': { color: '$primary900', textDecoration: 'underline' },
  '&:active': { color: '$primary500' },
  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        letterSpacing: '0.01em',
        lineHeight: 1.6
      },
      md: {
        fontSize: '$md',
        letterSpacing: '0.02em',
        lineHeight: 1.4
      },
      lg: {
        fontSize: '$lg',
        letterSpacing: '0.02em',
        lineHeight: 1.4
      }
    }
  }
})

type LinkProps = React.ComponentProps<typeof StyledLink>

export const Link: React.FC<LinkProps> = React.forwardRef(
  ({ size = 'md', ...rest }, ref) => (
    <StyledLink size={size} {...rest} ref={ref} />
  )
)

Link.displayName = 'Link'
