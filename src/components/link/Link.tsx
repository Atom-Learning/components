import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { textVariantSize } from '../text'

const StyledLink = styled('a', {
  color: '$primary500',
  fontFamily: '$sans',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:focus, &:hover': {
    color: '$primary900',
    textDecoration: 'underline'
  },
  '&:active, &:visited': {
    color: '$primary500'
  },
  variants: {
    size: textVariantSize({ applyCapsize: false })
  }
})

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  { as?: React.ComponentType | React.ElementType }
>

export const Link: React.FC<LinkProps> = React.forwardRef(
  ({ size = 'md', ...rest }, ref) => (
    <StyledLink size={size} {...rest} ref={ref} />
  )
)

Link.displayName = 'Link'
