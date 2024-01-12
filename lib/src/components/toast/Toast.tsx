import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { ToastCloseButton } from './ToastCloseButton'
import { ToastIcon } from './ToastIcon'
import { useToastContext } from './ToastProvider'

const toastVariants = {
  loading: { bg: '$info' },
  blank: { bg: '$info' },
  success: { bg: '$success' },
  error: { bg: '$danger' }
} as const

export const StyledToast = styled(Flex, {
  pointerEvents: 'auto',
  borderRadius: '$0',
  boxShadow: '$1',
  boxSizing: 'border-box',
  color: 'white',
  minHeight: '$5',
  position: 'relative',
  px: '$4',
  py: '$1',
  transition: 'background-color 50ms ease-out',
  '@allowMotion': {
    transition: 'background-color 50ms ease-out, transform 150ms ease-out'
  },
  variants: {
    type: toastVariants
  }
})

type ToastProps = Omit<React.ComponentProps<typeof StyledToast>, 'type'> & {
  type?: keyof typeof toastVariants
}

export const Toast = (props: ToastProps): JSX.Element => {
  const { type } = useToastContext()
  return <StyledToast align="center" type={props.type || type} {...props} />
}

Toast.Icon = ToastIcon
Toast.Close = ToastCloseButton
