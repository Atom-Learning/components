import { Trigger } from '@radix-ui/react-alert-dialog'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type AlertDialogTriggerProps = React.ComponentProps<typeof Trigger>

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = (
  props
) => <Trigger as={Slot} {...props} />
