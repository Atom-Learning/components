import React from 'react'

import { Item } from '@radix-ui/react-menu'

import { MenuItem } from './MenuItem'
import { MenuItemContent } from './MenuItemContent'
import { Button } from '../button'

export const MenuButton: React.FC<
  React.ComponentProps<typeof MenuItemContent> & { href: string }
> = ({ css, className, ...props }) => (
  <MenuItem>
    <MenuItemContent css={css} className={className}>
      <Item asChild>
        <Button fullWidth {...props} />
      </Item>
    </MenuItemContent>
  </MenuItem>
)
