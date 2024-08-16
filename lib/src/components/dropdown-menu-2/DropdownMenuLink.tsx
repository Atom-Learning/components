import React from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'

import { Menu } from '../menu'

export const DropdownMenuLink = (props) => (
  <Menu.Link ItemComponent={Item} {...props} />
)
