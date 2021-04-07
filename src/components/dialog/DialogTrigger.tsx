import { Trigger } from '@radix-ui/react-dialog'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type DialogTriggerProps = React.ComponentProps<typeof Trigger>

export const DialogTrigger: React.FC<DialogTriggerProps> = (props) => (
  <Trigger as={Slot} {...props} />
)
