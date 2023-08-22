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

type LinkProps = React.ComponentProps<typeof StyledLink> & {
  asChild?: boolean
  as?: never
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as, asChild, size = 'md', href, ...rest }, ref) => {
    if (asChild) {
      return <StyledLink noCapsize {...rest} as={Slot} size={size} ref={ref} />
    }

    return (
      <StyledLink
        {...(isExternalLink(href)
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...rest}
        href={href}
        size={size}
        ref={ref}
      />
    )
  }
)

Link.displayName = 'Link'
