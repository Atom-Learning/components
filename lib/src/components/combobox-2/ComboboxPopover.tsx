import * as React from 'react'
import { DropdownMenu } from '../dropdown-menu-2'

export const ComboboxPopover = (props) => {
  console.log({ props })
  return (
    <DropdownMenu.Content {...props} />
  )
}
