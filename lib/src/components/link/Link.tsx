import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { disabledStyle, Override } from '~/utilities'
import { getExternalAnchorProps } from '~/utilities/uri'

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
  '&[disabled]': {
    ...disabledStyle,
    pointerEvents: 'none'
  },

  [`${StyledText} > &, ${StyledHeading} > &, ${StyledLi} > &, ${StyledMarkdownEmphasis} > &`]:
    {
      fontSize: '100%',
      lineHeight: 1,
      '&::before, &::after': {
        content: 'none'
      }
    },
  variants: textVariants,
  defaultVariants: {
    size: 'md'
  }
})

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  } & NavigatorActions
>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as, href, ...rest }, ref) => (
    <StyledLink
      as={as || (!href ? 'button' : undefined)}
      noCapsize={!href ? true : undefined}
      href={href}
      {...rest}
      {...getExternalAnchorProps(href)}
      ref={ref}
    />
  )
) as React.FC<LinkProps>

Link.displayName = 'Link'
