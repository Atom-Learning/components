import * as React from 'react'
import { ItemIndicator } from '@radix-ui/react-dropdown-menu'
import { Ok } from '@atom-learning/icons'

import { Icon } from '../icon'

import { styled } from '~/stitches'

const StyledDropdownMenuItemIndicator = styled(ItemIndicator, {
  mr: 0,
  ml: 'auto'
})

export const DropdownMenuItemIndicator = (props) => (
  <StyledDropdownMenuItemIndicator {...props}>
    <Icon is={Ok} size="md" />
  </StyledDropdownMenuItemIndicator>
)
