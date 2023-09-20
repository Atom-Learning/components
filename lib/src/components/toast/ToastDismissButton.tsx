import { Close } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { Toast } from 'react-hot-toast/dist/core/types'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

interface ToastDismissButtonProps
  extends Omit<React.ComponentProps<typeof ActionIcon>, 'label' | 'children'> {
  id: Toast['id']
  onDismiss?: () => void
  label?: string
}

export const ToastDismissButton = ({
  id,
  onDismiss,
  label = 'Close alert',
  ...rest
}: ToastDismissButtonProps) => {
  return (
    <ActionIcon
      css={{
        color: 'white',
        mr: '-$2',
        '&:hover,&:focus': { color: 'white', opacity: 0.9 }
      }}
      label={label}
      onClick={() => {
        toast.dismiss(id)
        onDismiss?.()
      }}
      {...rest}
    >
      <Icon is={Close} />
    </ActionIcon>
  )
}
