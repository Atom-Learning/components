import * as React from 'react'

import { styled } from '~/stitches'
import { isExternalLink, isMailLink, isTelLink } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledMarkdownEmphasis } from '../markdown-content/components'
import { StyledText, textVariants } from '../text/Text'
import { Slot } from '@radix-ui/react-slot'

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

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof StyledLink> & { asChild?: boolean }
>(({ asChild, size = 'md', href, ...rest }, ref) => {
  if (asChild) {
    return <StyledLink {...rest} as={Slot} noCapsize size={size} ref={ref} />
  }

  const props = { href, size, ref, ...rest }

  if (href && isExternalLink(href) && !isMailLink(href) && !isTelLink(href)) {
    return <StyledLink target="_blank" rel="noopener noreferrer" {...props} />
  }

  return <StyledLink {...props} />
})

Link.displayName = 'Link'
