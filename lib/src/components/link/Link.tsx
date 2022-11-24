import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledText, textVariants } from '../text/Text'

export const StyledLink = styled('a', {
  bg: 'unset',
  border: 'unset',
  p: 'unset',
  color: '$primary',
  cursor: 'pointer',
  fontFamily: '$body',
  textDecoration: 'none',
  '&:focus, &:hover': {
    color: '$primaryMid',
    textDecoration: 'underline'
  },
  '&:active': {
    color: '$primaryDark'
  },
  [`${StyledText} > &, ${StyledHeading} > &, ${StyledLi} > &`]: {
    fontSize: '100%',
    lineHeight: 1,
    '&::before, &::after': {
      content: 'none'
    }
  },
  variants: textVariants
})

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  } & NavigatorActions
>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', href, ...props }, ref) => (
    <StyledLink
      {...(!href && { as: 'button', noCapsize: true })}
      size={size}
      href={href}
      {...props}
      ref={ref}
    />
  )
) as React.FC<LinkProps>

Link.displayName = 'Link'
