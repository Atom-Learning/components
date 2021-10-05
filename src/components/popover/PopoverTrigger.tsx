import { Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

type PopoverTriggerProps = React.ComponentProps<typeof Trigger>

export const PopoverTrigger: React.FC<PopoverTriggerProps> = (props) => (
  <Trigger asChild {...props} />
)
