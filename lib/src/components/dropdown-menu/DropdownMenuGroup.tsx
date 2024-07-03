import * as React from 'react'
import { Group } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

const StyledDropdownMenuGroup = styled(Group, {})

export const DropdownMenuGroup = (props) => (
  <StyledDropdownMenuGroup {...props} />
)
