import * as React from 'react'
import { RadioGroup } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContext } from './DropdownMenu.context'

import { styled } from '~/stitches'

const StyledDropdownMenuRadioGroup = styled(RadioGroup, {})

export const DropdownMenuRadioGroup = ({ name, ...rest }) => {
  const { updateSelected, selected } = React.useContext(DropdownMenuContext)
  const handleValueChange = (newValue) => {
    updateSelected(name, newValue, 'replace')
  }
  const value = selected.get(name)?.values().next().value
  console.log(value)

  return (
    <StyledDropdownMenuRadioGroup onValueChange={handleValueChange} value={value} {...rest} />
  )
}
