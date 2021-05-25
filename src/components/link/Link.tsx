import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledParagraph, textVariantSize } from '../text/Text'

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
  [`${StyledParagraph} > &, ${StyledHeading} > &, ${StyledLi} > &`]: {
    fontSize: '100%',
    lineHeight: 1,
    '&::before, &::after': {
      content: 'none'
    }
  },
  variants: {
    size: textVariantSize()
  }
})

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  } & NavigatorActions
>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', onClick, href, ...remainingProps }, ref) =>
    onClick ? (
      <StyledLink
        as="button"
        size={size}
        {...remainingProps}
        ref={ref}
        onClick={onClick}
      />
    ) : (
      <StyledLink size={size} {...remainingProps} ref={ref} href={href} />
    )
) as React.FC<LinkProps>

Link.displayName = 'Link'
