// import { Anchor } from '@radix-ui/react-menu'
import React from 'react'

import { styled } from '~/stitches'
import { getExternalAnchorProps } from '~/utilities/uri'

import { Item } from '@radix-ui/react-roving-focus'


import { Link } from '../link'
import { MenuItem } from './MenuItem'
import { MenuItemContent } from './MenuItemContent'
import { disabledStyle, focusVisibleStyleBlock } from '~/utilities'

export const dropdownMenuStyleInteractiveItem = {
  '&:not([data-disabled])': {
    cursor: 'pointer',
    '&:focus-visible': focusVisibleStyleBlock(),
    '&:hover': {
      background: '$interactive2'
    },
    '&:active': {
      background: '$interactive3'
    }
  },
  '&[data-disabled]': disabledStyle,
  '&[data-state="on"]': {
    background: '$interactive3',
  }
}

const StyledMenuLink = styled(Link, {
  display: 'flex',
  textDecoration: 'none !important',
  color: 'inherit !important',
  ...dropdownMenuStyleInteractiveItem
})

export const MenuLink: React.FC<
  React.ComponentProps<typeof MenuItemContent> & { href: string }
> = ({ children, href, ItemComponent = Item, ...props }) => (
  <MenuItem>
    <ItemComponent asChild>
      <StyledMenuLink href={href} role="menuitem" {...getExternalAnchorProps(href)} {...props}>
        <MenuItemContent>
          {children}
        </MenuItemContent>
      </StyledMenuLink>
    </ItemComponent>
  </MenuItem>

)
