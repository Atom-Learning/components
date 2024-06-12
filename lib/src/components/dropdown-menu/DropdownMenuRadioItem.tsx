import * as React from 'react'
import { RadioItem } from '@radix-ui/react-dropdown-menu'

import { dropdownMenuStyleInteractiveItem } from './DropdownMenuItem'
import { JustItem } from './JustItem'
import { DropdownMenuItemIndicator } from './DropdownMenuItemIndicator'

import { styled } from '~/stitches'

const StyledDropdownMenuRadioItem = styled(RadioItem, dropdownMenuStyleInteractiveItem)

export const DropdownMenuRadioItem = ({ children, ...rest }) => (
  <StyledDropdownMenuRadioItem {...rest} asChild>
    <JustItem align="center">
      {children}
      <DropdownMenuItemIndicator />
    </JustItem>
  </StyledDropdownMenuRadioItem>
)
