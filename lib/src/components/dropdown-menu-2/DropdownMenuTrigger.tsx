import { Trigger } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'

export const DropdownMenuTrigger = styled(Trigger, {
  '&[disabled]': disabledStyle
})
