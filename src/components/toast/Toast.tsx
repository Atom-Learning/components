import { Close } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { Toast as ToastInterface } from 'react-hot-toast/dist/core/types'

import { keyframes, styled } from '~/stitches'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'
import { Text } from '../text/Text'

export const TOAST_WIDTH = 360

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
  variants: {
    visible: {
      true: {
        animation: `${slideIn} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
      },
      false: {
        animation: `${slideOut} 250ms cubic-bezier(0.22, 1, 0.36, 1)`,
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
  transition: 'background-color 50ms ease-out, transform 150ms ease-out',
  width: TOAST_WIDTH,
  variants: {
    status: {
      blank: { bg: '$primary900' },
      error: { bg: '$danger' },
      loading: { bg: '$primary900' },
      success: { bg: '$success' }
    }
  }
})

type ToastProps = React.ComponentProps<typeof StyledToast> &
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

export const Toast: React.FC<ToastProps> = React.memo(
  ({
    ariaLive,
    height,
    id,
    message,
    role,
    type = 'blank',
    visible,
    calculateOffset,
    updateHeight
  }) => {
    const offset = calculateOffset(id, {
      reverseOrder: true,
      margin: 8
    })

    const ref = (el) => {
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
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Text css={{ color: 'inherit' }}>{message}</Text>
          <ActionIcon
            css={{
              color: 'white',
              flex: '0 0 auto'
            }}
            label="Close alert"
            onClick={() => toast.dismiss(id)}
          >
            <Icon is={Close} />
          </ActionIcon>
        </StyledToast>
      </ToastContainer>
    )
  }
)
