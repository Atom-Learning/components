import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, styled } from '~/stitches'
import {
  navigationMenuActiveParentItemStyles,
  navigationMenuDisabledStyles,
  navigationMenuItemStyles
} from './NavigationMenu.constants'

const DisabledButton = styled('button', {
  ...navigationMenuItemStyles,
  ...navigationMenuDisabledStyles
})

const ListItem = styled('li', { unset: 'all' })

const StyledLink = styled(
  NavigationMenuPrimitive.Link,
  navigationMenuItemStyles,
  {
    display: 'block',
    textDecoration: 'none',
    lineHeight: 1,
    variants: {
      elementType: {
        dropdownItem: {
          '&[data-active]': {
            background: '$primaryLight',
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
          '&[data-active]': { ...navigationMenuActiveParentItemStyles }
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
