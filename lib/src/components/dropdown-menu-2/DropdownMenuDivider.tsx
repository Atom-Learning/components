import * as React from 'react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Menu } from '../menu'

export const DropdownMenuDivider = (props) => {
  return <Separator asChild><Menu.Divider {...props} /></Separator>
}
