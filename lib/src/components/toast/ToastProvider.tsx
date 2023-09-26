import { Error } from '@atom-learning/icons'
import * as React from 'react'
import { useToaster } from 'react-hot-toast'

import { CSS, keyframes, styled } from '~/stitches'
export { default as toast } from 'react-hot-toast'
import type { Toast as ToastType } from 'react-hot-toast/dist/core/types'

import { MAX_Z_INDEX } from '~/constants/zIndices'

import { Flex } from '../flex'
import { Spacer } from '../spacer'
import { Text } from '../text'
import { Toast } from './Toast'

const DEFAULT_OFFSET = '$2'
const TOAST_WIDTH = 400

const ToastProviderBase = styled('div', {
  position: 'fixed',
  zIndex: MAX_Z_INDEX,
  inset: DEFAULT_OFFSET,
  pointerEvents: 'none',
  '@sm': {
    top: '$3'
  }
})

const slideIn = keyframes({
  '0%': { transform: 'translateY(-100%)', opacity: 0 },
  '100%': { transform: `translateY(0)`, opacity: 1 }
})

const slideOut = keyframes({
  '0%': { transform: `translateY(0)`, opacity: 1 },
  '100%': { transform: `translateY(-100%)`, opacity: 0 }
})

const ToastWrapper = styled('div', {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$0',
  boxSizing: 'border-box',
  minHeight: '$5',
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

const ToastContext = React.createContext<Pick<
  ToastType,
  'type' | 'id' | 'message'
> | null>(null)

export const ToastProvider: React.FC<{ css?: CSS }> = ({ children, css }) => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <>
      <ToastProviderBase
        onMouseEnter={startPause}
        onMouseLeave={endPause}
        css={css}
      >
        {toasts.map((toast) => {
          const { message: children } = toast

          const offset = calculateOffset(toast.id, {
            reverseOrder: true,
            margin: 8
          })

          const ref = (el: HTMLDivElement | null) => {
            if (el && toast.height === undefined) {
              updateHeight(toast.id, el.getBoundingClientRect().height)
            }
          }

          return (
            <ToastWrapper
              key={toast.id}
              ref={ref}
              visible={toast.visible}
              role={toast.role}
              aria-live={toast.ariaLive}
              css={{ top: offset }}
            >
              <ToastContext.Provider value={toast}>
                {typeof children === 'function' ? (
                  children(toast)
                ) : React.isValidElement(children) ? (
                  children
                ) : (
                  <Toast css={{ width: TOAST_WIDTH }}>
                    {toast.type === 'error' && <Toast.Icon is={Error} />}
                    <Text>{children}</Text>
                    <Spacer />
                    <Toast.Close />
                  </Toast>
                )}
              </ToastContext.Provider>
            </ToastWrapper>
          )
        })}
      </ToastProviderBase>
      {children}
    </>
  )
}

export const useToastContext = () => {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }

  return context
}

ToastProvider.displayName = 'ToastProvider'
