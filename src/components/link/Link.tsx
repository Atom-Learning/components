import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { textVariantSize } from '../text'

const StyledLink = styled('a', {
  bg: 'unset',
  border: 'unset',
  p: 'unset',
  color: '$primary500',
  cursor: 'pointer',
  fontFamily: '$sans',
  textDecoration: 'none',
  '&:focus, &:hover': {
    color: '$primary900',
    textDecoration: 'underline'
  },
  '&:active': {
    color: '$primary500'
  },
  variants: {
    size: textVariantSize({ applyCapsize: false })
  }
})

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  }
>

export const Link: React.FC<LinkProps> = React.forwardRef(
  ({ size = 'md', ...remainingProps }, ref) => (
    <StyledLink size={size} {...remainingProps} ref={ref} />
  )
)

Link.displayName = 'Link'
