import { TriggerItem } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

import { itemStyles } from './DropdownMenuItem'

export const DropdownMenuTriggerItem = styled(TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: '$tonal100'
  },
  ...itemStyles
})
