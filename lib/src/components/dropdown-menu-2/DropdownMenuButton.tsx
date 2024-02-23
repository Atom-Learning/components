import React from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'

import { Menu } from '../menu'

export const DropdownMenuButton = (props) => (
  <Menu.Button ItemComponent={Item} {...props} />
)
