import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { CSS, styled } from '~/stitches'
import { getExternalAnchorProps } from '~/utilities/uri'

import {
  navigationMenuActiveItemStyles,
  navigationMenuBaseItemStyles,
  navigationMenuDisabledItemStyles
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
            background: '$backgroundDataActive',
            color: '$dataActiveText',
            '&:hover': {
              background: '$dataActiveBackgroundHover',
              color: '$dataActiveTextHover'
            },
            '&:active': {
              background: '$dataActiveBackground',
              color: '$dataActivePressedText'
            },
            '&:focus-visible': {
              boxShadow: '0 0 0 2px $colors$primary',
              color: '$dataActiveFocus'
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
  ) => (
    <ListItem>
      {disabled ? (
        <DisabledButton disabled {...props}>
          {children}
        </DisabledButton>
      ) : (
        <StyledLink
          href={href}
          ref={forwardedRef}
          elementType={variant}
          css={css}
          {...getExternalAnchorProps(href)}
          {...props}
        >
          {children}
        </StyledLink>
      )}
    </ListItem>
  )
)

NavigationMenuLink.displayName = 'NavigationMenuLink'
