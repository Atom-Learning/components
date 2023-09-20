import { Error } from '@atom-learning/icons'
import * as React from 'react'
import type { Toast } from 'react-hot-toast/dist/core/types'

import { Flex } from '../flex'
import { Icon } from '../icon/Icon'
import { Loader } from '../loader/Loader'
import { Text } from '../text/Text'
import { ToastDismissButton } from './ToastDismissButton'

export const TOAST_WIDTH = 400

export const ToastContent = ({
  id,
  message,
  type
}: Pick<Toast, 'id' | 'message' | 'type'>) => {
  return (
    <Flex css={{ alignItems: 'center', '@md': { width: TOAST_WIDTH } }}>
      {type === 'error' && (
        <Icon size="sm" css={{ mr: '$3', flex: '0 0 auto' }} is={Error} />
      )}
      <Text>{message}</Text>
      <Flex css={{ flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' }} />
      {type === 'loading' ? (
        <Loader css={{ flex: '0 0 auto', ml: 'auto' }} />
      ) : (
        <ToastDismissButton id={id} />
      )}
    </Flex>
  )
}
