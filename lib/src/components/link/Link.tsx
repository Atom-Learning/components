import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { styled } from '~/stitches'
import { isExternalLink } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledMarkdownEmphasis } from '../markdown-content/components'
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
  [`${StyledText} > &, ${StyledHeading} > &, ${StyledLi} > &, ${StyledMarkdownEmphasis} > &`]:
  {
    fontSize: '100%',
    lineHeight: 1,
    '&::before, &::after': {
      content: 'none'
    }
  },
  variants: textVariants
})

const StyledSlot = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Slot, {
})

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof StyledLink> & {
    asChild?: boolean
    as?: React.ComponentType | React.ElementType
  }
>(({ asChild, href, size = 'md', ...rest }, ref) => {

  const linkProps = { ...rest, href, ref, ...(href && isExternalLink(href) ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
  if (asChild) return (<StyledSlot {...linkProps} as="a" type={undefined} />)

  return (<StyledLink {...linkProps} size={size} noCapsize />)
})

Link.displayName = 'Link'
