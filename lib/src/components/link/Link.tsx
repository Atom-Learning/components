import * as React from 'react'

import { styled } from '~/stitches'
import { NavigatorActions } from '~/types'
import { Override } from '~/utilities'

import { StyledHeading } from '../heading/Heading'
import { StyledLi } from '../list/List'
import { StyledText, textVariants } from '../text/Text'

const StyledSpan = styled('span', { position: 'relative' })

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
  ({ children, size = 'md', onClick, href, ...remainingProps }, ref) =>
    href ? (
      <StyledLink size={size} {...remainingProps} ref={ref} href={href}>
        {children}
      </StyledLink>
    ) : (
      <StyledLink
        as="button"
        size={size}
        {...remainingProps}
        ref={ref}
        onClick={onClick}
      >
        {/**
         * Safari cuts off text that overflows in <button /> elements.
         * When we apply capsize, this causes text to be cut-off.
         * Adding an element with `position: relative` prevents this.
         *
         * https://stackoverflow.com/questions/41100273/overflowing-button-text-is-being-clipped-in-safari
         */}
        <StyledSpan css={{ position: 'relative' }}>{children}</StyledSpan>
      </StyledLink>
    )
) as React.FC<LinkProps>

Link.displayName = 'Link'
