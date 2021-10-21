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

const getIconSize = (size) => {
  switch (size) {
    case 'lg':
      return 24
    case 'md':
      return 18
    case 'sm':
    default:
      return 16
  }
}

const getChildren = (children, size) =>
  React.Children.map(children, (child, i) => {
    if (child?.type === Icon) {
      return React.cloneElement(child, {
        css: {
          [i === 0 ? 'mr' : 'ml']: '$2',
          mt: size === 'sm' ? '-$0' : '-$1',
          size: getIconSize(size),
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
