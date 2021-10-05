import { Trigger } from '@radix-ui/react-alert-dialog'
import * as React from 'react'

type AlertDialogTriggerProps = React.ComponentProps<typeof Trigger>

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = (
  props
) => <Trigger asChild {...props} />
