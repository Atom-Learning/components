import * as React from 'react'
import { useToaster } from 'react-hot-toast'

import { styled } from '~/stitches'

import { Toast, TOAST_WIDTH } from './Toast'

export { default as toast } from 'react-hot-toast'

// maximum limit in modern browsers - 32 bit signed integer
const TOAST_Z_INDEX = 2147483647

const Container = styled('div', {
  left: '$2',
  position: 'fixed',
  top: '$2',
  right: '$2',
  zIndex: TOAST_Z_INDEX,
  '@sm': {
    top: '$3',
    right: 'auto',
    left: `calc(50% - ${TOAST_WIDTH / 2}px)`
  }
})

export const ToastProvider: React.FC = ({ children }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <>
      <Container onMouseEnter={startPause} onMouseLeave={endPause}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            calculateOffset={calculateOffset}
            updateHeight={updateHeight}
            {...toast}
          />
        ))}
      </Container>
      {children}
    </>
  )
}

ToastProvider.displayName = 'ToastProvider'
