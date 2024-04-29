import * as React from 'react'

import { ComponentsContext } from '~/context'
import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { disabledStyle, Override } from '~/utilities'
import { getExternalAnchorProps, isExternalUrl } from '~/utilities/uri'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledMarkdownEmphasis } from '../markdown-content/components'
import { StyledText, textVariants } from '../text/Text'

export const StyledLink = styled('a', {
  bg: 'unset',
  border: 'unset',
  p: 'unset',
  color: '$primary800',
  cursor: 'pointer',
  fontFamily: '$body',
  textDecoration: 'none',
  '&:focus, &:hover': {
    color: '$primary900',
    textDecoration: 'underline'
  },
  '&:active': {
    color: '$primary1000'
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
  } & NavigatorActions & { disabled?: boolean }
>

export const Link: React.ForwardRefExoticComponent<LinkProps> =
  React.forwardRef(({ as, disabled, href, ...rest }, ref) => {
    const { Link: ExternalLink } = React.useContext(ComponentsContext)

    return (
      <StyledLink
        as={
          as || (href ? (isExternalUrl(href) ? 'a' : ExternalLink) : 'button')
        }
        noCapsize={!href ? true : undefined}
        href={href}
        {...(disabled && { disabled: true })}
        {...rest}
        {...getExternalAnchorProps(href)}
        ref={ref}
      />
    )
  })

Link.displayName = 'Link'
