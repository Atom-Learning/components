import { Trigger } from '@radix-ui/react-popover'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type PopoverTriggerProps = React.ComponentProps<typeof Trigger>

export const PopoverTrigger: React.FC<PopoverTriggerProps> = (props) => (
  <Trigger as={Slot} {...props} />
)
