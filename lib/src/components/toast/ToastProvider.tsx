import * as React from 'react'
import { useToaster } from 'react-hot-toast'

import { styled } from '~/stitches'

import { Toast } from './Toast'

export { default as toast } from 'react-hot-toast'
import { MAX_Z_INDEX } from '~/constants/zIndices'
import { CSS } from '@stitches/react'

const DEFAULT_OFFSET = '$2'

const Container = styled('div', {
  position: 'fixed',
  zIndex: MAX_Z_INDEX,
  top: DEFAULT_OFFSET,
  left: DEFAULT_OFFSET,
  right: DEFAULT_OFFSET,
  bottom: DEFAULT_OFFSET,
  pointerEvents: 'none',
  '@sm': {
    top: '$3'
  }
})

export const ToastProvider: React.FC<{ css?: CSS }> = ({ children, css }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <>
      <Container onMouseEnter={startPause} onMouseLeave={endPause} css={css}>
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
