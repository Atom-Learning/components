import * as React from 'react'
import { Group } from '@radix-ui/react-dropdown-menu'
import { Menu } from '../menu'

export const DropdownMenuGroup = (props) => (
  <Group asChild><Menu.Group  {...props} /></Group>
)
