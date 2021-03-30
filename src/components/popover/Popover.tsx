import { Root } from '@radix-ui/react-popover'
import * as React from 'react'

import { PopoverContent } from './PopoverContent'
import { PopoverTrigger } from './PopoverTrigger'

type PopoverProps = React.ComponentProps<typeof Root>

export const Popover: React.FC<PopoverProps> & {
  Content: typeof PopoverContent
  Trigger: typeof PopoverTrigger
} = (props) => <Root {...props} />

Popover.Content = PopoverContent
Popover.Trigger = PopoverTrigger

Popover.displayName = 'Popover'
