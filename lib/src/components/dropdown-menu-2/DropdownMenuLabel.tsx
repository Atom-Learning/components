import * as React from 'react'

import { Label } from '@radix-ui/react-dropdown-menu'

import { Menu } from '../menu'

export const DropdownMenuLabel = (props) => {
  return <Label asChild><Menu.Label {...props} /></Label>
}
