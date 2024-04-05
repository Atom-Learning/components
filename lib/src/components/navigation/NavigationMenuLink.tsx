import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import React from 'react'

import { styled } from '~/stitches'
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
            background: '$backgroundSelected',
            color: '$textSelected',
            '&:hover': {
              background: '$backgroundSelectedHover',
              color: '$textSelectedHover'
            },
            '&:active': {
              background: '$backgroundSelectedPressed',
              color: '$textSelectedPressed'
            },
            '&:focus-visible': {
              boxShadow: '0 0 0 2px $colors$primary800',
              color: '$textSelectedFocus'
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

export const NavigationMenuLink: React.ForwardRefExoticComponent<
  Omit<React.ComponentProps<typeof StyledLink>, 'elementType'> & {
    disabled?: boolean
    variant?: React.ComponentProps<typeof StyledLink>['elementType']
  }
> = React.forwardRef(
  (
    { children, href, disabled, css, variant = 'link', ref, ...props },
    forwardedRef
  ) => (
    <ListItem>
      {disabled ? (
        <DisabledButton disabled css={css}>
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
