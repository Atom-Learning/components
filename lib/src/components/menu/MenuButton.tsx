import React from 'react'

import { Item } from '@radix-ui/react-roving-focus'

import { MenuItem } from './MenuItem'
import { MenuItemContent } from './MenuItemContent'
import { Button } from '../button'

export const MenuButton: React.FC<
  React.ComponentProps<typeof MenuItemContent> & { href: string }
> = ({ css, className, ItemComponent = Item, ...props }) => (
  <MenuItem>
    <MenuItemContent css={css} className={className}>
      <ItemComponent asChild>
        <Button fullWidth {...props} />
      </ItemComponent>
    </MenuItemContent>
  </MenuItem>
)
