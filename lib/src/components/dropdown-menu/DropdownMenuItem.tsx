import * as React from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'
import { focusVisibleStyleBlock, disabledStyle } from '~/utilities'
import { JustItem } from './JustItem'

export const dropdownMenuStyleInteractiveItem = {
  '&:not([data-disabled])': {
    cursor: 'pointer',
    '&[tabindex="0"]:focus-visible': focusVisibleStyleBlock(),
    '&:hover': {
      background: '$interactive2'
    },
    '&:active': {
      background: '$interactive3'
    }
  },
  '&[data-disabled]': disabledStyle,
  '&[data-state="on"]': {
    background: '$interactive3',
  }
}

const StyledDropdownMenuItem = styled(Item, dropdownMenuStyleInteractiveItem)

export const DropdownMenuItem = ({ children, ...rest }) => {
  return <StyledDropdownMenuItem {...rest} asChild><JustItem>{children}</JustItem></StyledDropdownMenuItem>
}
