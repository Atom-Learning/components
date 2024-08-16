import React from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

import { dropdownMenuStyleInteractiveItem } from './DropdownMenuItem'
import { JustItem } from './JustItem'
import { Button } from '../button'

const StyledDropdownMenuButtonItem = styled(Item, dropdownMenuStyleInteractiveItem)

const StyledDropdownMenuButtonItemButton = styled(Button, {})

export const DropdownMenuButtonItem: React.FC<
  React.ComponentProps<typeof JustItem> & { href: string }
> = ({ children, ...props }) => (
  <JustItem>
    <StyledDropdownMenuButtonItem {...props} asChild>
      <StyledDropdownMenuButtonItemButton fullWidth>
        {children}
      </StyledDropdownMenuButtonItemButton>
    </StyledDropdownMenuButtonItem>
  </JustItem>
)
