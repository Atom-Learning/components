import * as React from 'react'

import { StitchesComponent, StitchesVariants, styled } from '~/stitches'

const StyledLink = styled('a', {
  color: '$primary500',
  fontFamily: '$sans',
  textDecoration: 'none',
  cursor: 'pointer',
  ':visited': { color: '$primary500' },
  '&:focus, &:hover': { color: '$primary900', textDecoration: 'underline' },
  ':active': { color: '$primary500' },
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

type LinkProps = StitchesComponent<typeof StyledLink>
type LinkVariants = StitchesVariants<typeof StyledLink>

export const Link: React.FC<LinkProps & LinkVariants> = ({
  size = 'md',
  ...rest
}) => <StyledLink size={size} {...rest} />

Link.displayName = 'Link'
