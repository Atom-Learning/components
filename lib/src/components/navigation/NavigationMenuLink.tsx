import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, styled } from '~/stitches'
import {
  navigationMenuActiveItemStyles,
  navigationMenuDisabledItemStyles,
  navigationMenuBaseItemStyles
} from './NavigationMenu.styles'

const DisabledButton = styled('button', {
  ...navigationMenuBaseItemStyles,
  ...navigationMenuDisabledItemStyles
})

const ListItem = styled(NavigationMenuPrimitive.Item)

const StyledLink = styled(
  NavigationMenuPrimitive.Link,
  navigationMenuBaseItemStyles,
  {
    display: 'block',
    textDecoration: 'none',
    lineHeight: 1,
    variants: {
      elementType: {
        dropdownItem: {
          '&[data-active]': {
            background: '$primaryLight',
            color: '$primary',
            '*': {
              color: '$primary'
            },
            '&:hover': { background: '$tonal50' },
            '&:active': { background: '$tonal100' },
            '&:focus-visible': {
              boxShadow: '0 0 0 2px $colors$primary'
            }
          }
        },
        link: {
          '&[data-active]': { ...navigationMenuActiveItemStyles }
        }
      }
    }
  }
)

type NavigationMenuLinkProps = {
  href: string
  active?: boolean
  disabled?: boolean
  variant?: 'link' | 'dropdownItem'
  css?: CSS
}

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<NavigationMenuLinkProps>
>(
  (
    { children, href, disabled, css, variant = 'link', ...props },
    forwardedRef
  ) => {
    if (disabled) {
      return (
        <DisabledButton disabled {...props}>
          {children}
        </DisabledButton>
      )
    }

    return (
      <ListItem>
        <StyledLink
          href={href}
          ref={forwardedRef}
          elementType={variant}
          css={css}
          {...props}
        >
          {children}
        </StyledLink>
      </ListItem>
    )
  }
)

NavigationMenuLink.displayName = 'NavigationMenuLink'