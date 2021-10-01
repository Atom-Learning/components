import { ItemIndicator } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

export const DropdownMenuItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})
