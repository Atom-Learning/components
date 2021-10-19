import { Root, Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

import { PopoverContent } from './PopoverContent'

type PopoverProps = React.ComponentProps<typeof Root>

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof Trigger
  Content: typeof PopoverContent
} = (props) => <Root {...props} />

Popover.Content = PopoverContent
Popover.Trigger = Trigger

Popover.displayName = 'Popover'
