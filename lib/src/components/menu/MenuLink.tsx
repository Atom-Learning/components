// import { Anchor } from '@radix-ui/react-menu'
import { Item } from '@radix-ui/react-menu'
import React from 'react'

import { styled } from '~/stitches'
import { disabledStyle, focusVisibleStyleBlock } from '~/utilities'

import { Link } from '../link'
import { MenuItem } from './MenuItem'
import { MenuItemContent } from './MenuItemContent'

export const dropdownMenuStyleInteractiveItem = {
  '&:not([disabled])': {
    cursor: 'pointer',
    '&:focus-visible': focusVisibleStyleBlock(),
    '&:hover': {
      background: '$interactive2'
    },
    '&:active': {
      background: '$interactive3'
    }
  },
  '&[disabled]': disabledStyle,
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

type MenuLinkProps = React.ComponentProps<typeof MenuItemContent> & React.ComponentProps<typeof StyledMenuLink>
export const MenuLink = ({ children, /*, ItemComponent = Item, */ ...props }: MenuLinkProps) => (
  <MenuItem>
    <Item asChild>
      <StyledMenuLink role="menuitem" {...props}>
        <MenuItemContent>
          {children}
        </MenuItemContent>
      </StyledMenuLink>
    </Item>
  </MenuItem>

)
