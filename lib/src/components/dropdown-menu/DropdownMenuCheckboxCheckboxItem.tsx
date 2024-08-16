import * as React from 'react'
import { Minus, Ok } from '@atom-learning/icons'
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu'
import { Checkbox } from '@radix-ui/react-checkbox'

import { checkboxIndicatorStyles, checkboxStyles } from '../checkbox/Checkbox'
import { Icon } from '../icon'
import { DropdownMenuContext } from './DropdownMenu.context'
import { JustItem } from './JustItem'

import { styled } from '~/stitches'

const StyledDropdownMenuCheckboxCheckboxItem = styled(Checkbox, checkboxStyles)
const StyledDropdownMenuCheckboxCheckboxItemIndicator = styled(ItemIndicator, checkboxIndicatorStyles)

export const DropdownMenuCheckboxCheckboxItem = ({ children, name, value, ...rest }) => {
  const { checkSelected, updateSelected } = React.useContext(DropdownMenuContext)
  const isChecked = checkSelected(name, value)
  const handleCheckedChange = (newChecked) => {
    updateSelected(name, value, newChecked ? 'add' : 'delete')
  }

  return (
    <JustItem as="label">
      <CheckboxItem checked={isChecked} onCheckedChange={handleCheckedChange} {...rest} asChild>
        <StyledDropdownMenuCheckboxCheckboxItem>
          <StyledDropdownMenuCheckboxCheckboxItemIndicator asChild>
            <Icon
              is={isChecked === 'indeterminate' ? Minus : Ok}
              css={{ strokeWidth: '3' }}
              size='sm'
            />
          </StyledDropdownMenuCheckboxCheckboxItemIndicator>
        </StyledDropdownMenuCheckboxCheckboxItem>
      </CheckboxItem>
      {children}
    </JustItem>
  )
}
