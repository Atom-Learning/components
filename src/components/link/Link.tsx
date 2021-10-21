import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { Icon } from '../icon/Icon'
import { StyledLi } from '../list/List'
import { StyledParagraph, textVariantSize } from '../text/Text'

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

const getChildren = (children, size) =>
  React.Children.map(children, (child, i) => {
    if (child?.type === Icon) {
      return React.cloneElement(child, {
        size: size === 'lg' ? 'md' : 'sm',
        css: {
          [i === 0 ? 'mr' : 'ml']: '$2',
          mt: size === 'lg' ? '-$1' : '-$0',
          ...(child.props.css ? child.props.css : {})
        }
      })
    }
    return child
  })

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  } & NavigatorActions
>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, size = 'md', onClick, href, ...remainingProps }, ref) =>
    href ? (
      <StyledLink size={size} {...remainingProps} ref={ref} href={href}>
        {getChildren(children, size)}
      </StyledLink>
    ) : (
      <StyledLink
        as="button"
        size={size}
        {...remainingProps}
        ref={ref}
        onClick={onClick}
      >
        {getChildren(children, size)}
      </StyledLink>
    )
) as React.FC<LinkProps>

Link.displayName = 'Link'
