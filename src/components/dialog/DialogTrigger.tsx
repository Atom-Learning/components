import { Trigger } from '@radix-ui/react-dialog'
import * as React from 'react'

type DialogTriggerProps = React.ComponentProps<typeof Trigger>

export const DialogTrigger: React.FC<DialogTriggerProps> = (props) => (
  <Trigger {...props} />
)
