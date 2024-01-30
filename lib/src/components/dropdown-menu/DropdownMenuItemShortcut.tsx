import * as React from 'react'

import { styled } from '~/stitches'
import { Text } from '../text'

const StyledDropdownMenuItemShortcut = styled(Text, {
  mr: 0,
  ml: 'auto',
  '& + *': {
    ml: '0 !important'
  }
})

export const DropdownMenuItemShortcut = (props) => {
  return <StyledDropdownMenuItemShortcut size="sm" {...props} />
}
