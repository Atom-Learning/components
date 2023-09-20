import { Close } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { Toast } from 'react-hot-toast/dist/core/types'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'

interface ToastDismissButtonProps {
  id: Toast['id']
  onDismiss?: () => void
}

export const ToastDismissButton = ({
  id,
  onDismiss
}: ToastDismissButtonProps) => {
  return (
    <ActionIcon
      css={{
        color: 'white',
        mr: '-$2',
        '&:hover,&:focus': { color: 'white', opacity: 0.9 }
      }}
      label="Close alert"
      onClick={() => {
        toast.dismiss(id)
        onDismiss && onDismiss()
      }}
    >
      <Icon is={Close} />
    </ActionIcon>
  )
}
