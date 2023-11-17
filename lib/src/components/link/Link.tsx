import * as React from 'react'

import type { CSS } from '~/stitches'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'
import { getExternalAnchorProps } from '~/utilities/uri'

import { StyledHeading } from '../heading/Heading'
import { StyledIcon } from '../icon'
import { StyledLi } from '../list/List'
import { StyledMarkdownEmphasis } from '../markdown-content/components'
import { StyledText, textVariants } from '../text/Text'

const iconSizeVariants = {
  xs: { size: 14, mt: '-2px' },
  sm: { size: 16, mt: '-2px' },
  md: { size: 20, mt: '-4px' },
  lg: { size: 24, mt: '-4px' },
  xl: { size: 30, mt: '-4px' }
}

const linkSizeVariants = Object.keys(textVariants.size).reduce(
  (prev, key, i) => ({
    ...prev,
    [key]: {
      ...textVariants.size[key],
      [`& ${StyledIcon}`]: iconSizeVariants[key]
    }
  }),
  {} as Record<keyof typeof textVariants.size, CSS>
)

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
  [`& ${StyledIcon}:first-child`]: { mr: '$1' },
  [`& ${StyledIcon}:last-child`]: { ml: '$1' },
  variants: {
    ...textVariants,
    size: linkSizeVariants
  },
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
