import * as React from 'react'
// import { RadioGroup } from '@radix-ui/react-dropdown-menu'
import { CheckboxGroup } from '../checkbox-group'

import { styled } from '~/stitches'

const StyledDropdownMenuCheckboxGroup = styled(CheckboxGroup, {})

export const DropdownMenuCheckboxGroup = (props) => (
  <StyledDropdownMenuCheckboxGroup {...props} />
)
