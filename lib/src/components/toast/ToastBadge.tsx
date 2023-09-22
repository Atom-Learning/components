import * as React from 'react'

import { Error } from '@atom-learning/icons'
import { Toast } from './Toast'
import { Text } from '../text'
export { default as toast } from 'react-hot-toast'
import { useToastContext } from './ToastProvider'
import { Spacer } from '../spacer'

export const TOAST_WIDTH = 400

export const ToastBadge = () => {
  const { type, message } = useToastContext()

  return (
    <Toast css={{ width: TOAST_WIDTH }}>
      {type === 'error' && <Toast.Icon is={Error} />}
      <Text>{message}</Text>
      <Spacer />
      <Toast.Close />
    </Toast>
  )
}
