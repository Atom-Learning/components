import * as React from 'react'
import { useToaster } from 'react-hot-toast'

import { styled } from '~/stitches'

import { Toast } from './Toast'

export { default as toast } from 'react-hot-toast'

const Container = styled('div', {
  left: 'calc(50% - 360px / 2)',
  position: 'fixed',
  top: '$3'
})

export const ToastProvider: React.FC = ({ children }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <>
      <Container onMouseEnter={startPause} onMouseLeave={endPause}>
        {toasts.map((toast) => {
          const offset = calculateOffset(toast.id, {
            reverseOrder: true,
            margin: 8
          })
          const ref = (el) => {
            if (el && !toast.height) {
              const height = el.getBoundingClientRect().height
              updateHeight(toast.id, height)
            }
          }
          return (
            <Toast ref={ref} key={toast.id} offset={offset} {...toast}>
              {toast.message}
            </Toast>
          )
        })}
      </Container>
      {children}
    </>
  )
}

ToastProvider.displayName = 'ToastProvider'
