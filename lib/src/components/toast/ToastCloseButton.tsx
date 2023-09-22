import { Close } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { Toast } from 'react-hot-toast/dist/core/types'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'
import { useToastContext } from './ToastProvider'

export interface ToastCloseButtonProps
  extends Omit<React.ComponentProps<typeof ActionIcon>, 'label' | 'children'> {
  onDismiss?: () => void
  label?: string
}

export const ToastCloseButton = ({
  onDismiss,
  label = 'Close alert',
  ...rest
}: ToastCloseButtonProps): JSX.Element => {
  const { id } = useToastContext()

  return (
    <ActionIcon
      css={{
        color: 'white',
        mr: '-$2',
        '&:hover,&:focus': { color: 'white', opacity: 0.8 }
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
