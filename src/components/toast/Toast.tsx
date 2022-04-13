import { Close, Error } from '@atom-learning/icons'
import * as React from 'react'
import { toast } from 'react-hot-toast'
import type { Toast as ToastInterface } from 'react-hot-toast/dist/core/types'

import { keyframes, styled } from '~/stitches'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'
import { Loader } from '../loader/Loader'
import { Text } from '../text/Text'

export const TOAST_WIDTH = 400

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
  pl: '$4',
  position: 'relative',
  pr: '$6',
  py: '$4',
  transition: 'background-color 50ms ease-out',
  width: '100%',
  '@sm': {
    width: TOAST_WIDTH
  },
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
          {type === 'error' && (
            <Icon size="sm" css={{ mr: '$3', flex: '0 0 auto' }} is={Error} />
          )}
          <Text css={{ color: 'inherit' }}>{message}</Text>
          {type === 'loading' ? (
            <Loader css={{ flex: '0 0 auto', ml: 'auto' }} />
          ) : (
            <ActionIcon
              css={{
                position: 'absolute',
                top: '$2',
                right: '$2',
                color: 'white',
                '&:hover,&:focus': { color: 'white', opacity: 0.5 }
              }}
              label="Close alert"
              onClick={() => toast.dismiss(id)}
            >
              <Icon is={Close} />
            </ActionIcon>
          )}
        </StyledToast>
      </ToastContainer>
    )
  }
)
