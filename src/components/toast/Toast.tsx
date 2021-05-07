import { Close } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { ToastType } from 'react-hot-toast/dist/core/types'

import { keyframes, styled } from '~/stitches'

import { Icon } from '../icon/Icon'
import { Text } from '../text/Text'

const enterAnimation = keyframes({
  '0%': { transform: `translate3d(0,-100%,0)`, opacity: 0 },
  '100%': { transform: `translate3d(0,0,0)`, opacity: 1 }
})
const exitAnimation = keyframes({
  '0%': { transform: `translate3d(0,0,0)`, opacity: 1 },
  '100%': { transform: `translate3d(0,-100%,0)`, opacity: 0 }
})

const ToastContainer = styled('div', {
  position: 'absolute',
  variants: {
    visible: {
      true: {
        animation: `${enterAnimation} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
      },
      false: {
        animation: `${exitAnimation} 250ms cubic-bezier(0.22, 1, 0.36, 1)`,
        opacity: 0
      }
    }
  }
})

const StyledToast = styled('div', {
  alignItems: 'center',
  borderRadius: '$0',
  boxSizing: 'border-box',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '$4',
  pl: '$3',
  pr: '$2',
  py: '$2',
  transition: 'background-color 75ms ease-out, transform 150ms ease-out',
  width: 360,
  variants: {
    status: {
      blank: { bg: '$primary900' },
      error: { bg: '$danger' },
      loading: { bg: '$primary900' },
      success: { bg: '$success' }
    }
  }
})

// TODO: convert to ActionIcon
const ButtonClose = styled('button', {
  bg: 'unset',
  border: 'unset',
  color: 'white',
  cursor: 'pointer',
  flex: '0 0 auto',
  p: 'unset',
  size: '$3'
})

type ToastProps = React.ComponentProps<typeof StyledToast> & {
  offset: number
  type: ToastType
  visible: boolean
}

export const Toast: React.FC<ToastProps> = React.memo(
  React.forwardRef(({ children, type = 'blank', id, offset, visible }, ref) => (
    <ToastContainer visible={visible}>
      <StyledToast
        ref={ref}
        status={type}
        role="status"
        aria-live="polite"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Text css={{ color: 'white' }}>{children}</Text>
        <ButtonClose onClick={() => toast.dismiss(id)}>
          <Icon is={Close} />
        </ButtonClose>
      </StyledToast>
    </ToastContainer>
  ))
)
