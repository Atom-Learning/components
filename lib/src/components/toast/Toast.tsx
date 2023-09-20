import * as React from 'react'
import type { Toast as ToastInterface } from 'react-hot-toast/dist/core/types'

import { keyframes, styled } from '~/stitches'

import { ToastContent } from './ToastContent'

const slideIn = keyframes({
  '0%': { transform: `translate3d(0,-100%,0)`, opacity: 0 },
  '100%': { transform: `translate3d(0,0,0)`, opacity: 1 }
})

const slideOut = keyframes({
  '0%': { transform: `translate3d(0,0,0)`, opacity: 1 },
  '100%': { transform: `translate3d(0,-100%,0)`, opacity: 0 }
})

const ToastContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  variants: {
    visible: {
      true: {
        '@allowMotion': {
          animation: `${slideIn} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
        }
      },
      false: {
        opacity: 0,
        '@allowMotion': {
          animation: `${slideOut} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
        }
      }
    }
  }
})

const StyledToast = styled('div', {
  pointerEvents: 'auto',
  alignItems: 'center',
  borderRadius: '$0',
  boxShadow: '$1',
  boxSizing: 'border-box',
  color: 'white',
  display: 'flex',
  minHeight: '$5',
  position: 'relative',
  px: '$3',
  py: '$1',
  transition: 'background-color 50ms ease-out',
  '@allowMotion': {
    transition: 'background-color 50ms ease-out, transform 150ms ease-out'
  },
  variants: {
    status: {
      blank: { bg: '$primary' },
      error: { bg: '$danger' },
      loading: { bg: '$primary' },
      success: { bg: '$success' }
    }
  }
})

export type ToastProps = React.ComponentProps<typeof StyledToast> &
  ToastInterface & {
    calculateOffset: (
      id: string,
      options?: {
        reverseOrder?: boolean
        margin?: number
      }
    ) => number
    updateHeight: (toastId: string, height: number) => void
  }

export const Toast: React.FC<ToastProps> = React.memo((props) => {
  const {
    ariaLive,
    height,
    id,
    message,
    role,
    type = 'blank',
    visible,
    calculateOffset,
    updateHeight
  } = props
  const offset = calculateOffset(id, {
    reverseOrder: true,
    margin: 8
  })

  const ref = (el: HTMLDivElement | null) => {
    if (el && height === undefined) {
      updateHeight(id, el.getBoundingClientRect().height)
    }
  }

  return (
    <ToastContainer visible={visible}>
      <StyledToast
        ref={ref}
        status={type}
        role={role}
        aria-live={ariaLive}
        css={{
          transform: `translateY(${offset}px)`
        }}
      >
        {typeof message === 'function' ? (
          message(props)
        ) : (
          <ToastContent type={type} message={message} id={id} />
        )}
      </StyledToast>
    </ToastContainer>
  )
})
