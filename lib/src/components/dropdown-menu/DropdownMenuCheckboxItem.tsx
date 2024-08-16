import * as React from 'react'
import { CheckboxItem } from '@radix-ui/react-dropdown-menu'

import { DropdownMenuContext } from './DropdownMenu.context'
import { dropdownMenuStyleInteractiveItem } from './DropdownMenuItem'
import { DropdownMenuItemIndicator } from './DropdownMenuItemIndicator'

import { JustItem } from './JustItem'

import { styled } from '~/stitches'

const StyledDropdownMenuCheckboxItem = styled(CheckboxItem, dropdownMenuStyleInteractiveItem)

export const DropdownMenuCheckboxItem = ({ children, name, value, ...rest }) => {
  const { checkSelected, updateSelected } = React.useContext(DropdownMenuContext)
  const isChecked = checkSelected(name, value)
  const handleCheckedChange = (newChecked) => {
    updateSelected(name, value, newChecked ? 'add' : 'delete')
  }

  return (
    <StyledDropdownMenuCheckboxItem checked={isChecked} onCheckedChange={handleCheckedChange} {...rest} asChild>
      <JustItem>
        {children}
        <DropdownMenuItemIndicator />
      </JustItem>
    </StyledDropdownMenuCheckboxItem>
  )
}
