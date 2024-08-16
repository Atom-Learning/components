import * as React from 'react'

import { styled } from '~/stitches'
import { Box } from '../box'

const StyledMenuItemRightSlot = styled(Box, {
  mr: 0,
  ml: 'auto',
  '& + *': {
    ml: '0 !important'
  }
})

export const MenuItemRightSlot = (props) => {
  return <StyledMenuItemRightSlot {...props} />
}
