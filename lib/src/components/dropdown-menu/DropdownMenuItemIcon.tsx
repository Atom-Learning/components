import * as React from 'react'
import { styled } from '~/stitches'

import { Icon } from '../icon'

const StyledDropdownMenuItemIcon = styled(Icon, {
  // color: 'inherit'
})

export const DropdownMenuItemIcon = (props) => {
  return <StyledDropdownMenuItemIcon size="sm" {...props} />
}
