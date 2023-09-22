import * as React from 'react'
import { useToaster } from 'react-hot-toast'

import { keyframes, styled, CSS } from '~/stitches'
import { Error } from '@atom-learning/icons'
export { default as toast } from 'react-hot-toast'
import { MAX_Z_INDEX } from '~/constants/zIndices'
import { Flex } from '../flex'
import { ToastBadge } from './ToastBadge'
import type { Toast as ToastType } from 'react-hot-toast/dist/core/types'

const DEFAULT_OFFSET = '$2'

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
  '0%': { transform: `translate3d(0,-100%,0)`, opacity: 0 },
  '100%': { transform: `translate3d(0,0,0)`, opacity: 1 }
})

const slideOut = keyframes({
  '0%': { transform: `translate3d(0,0,0)`, opacity: 1 },
  '100%': { transform: `translate3d(0,-100%,0)`, opacity: 0 }
})

const ToastWrapper = styled('div', {
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
          const children = toast.message

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
            <ToastWrapper key={toast.id} visible={toast.visible}>
              <Flex
                ref={ref}
                role={toast.role}
                aria-live={toast.ariaLive}
                css={{
                  transform: `translateY(${offset}px)`,
                  pointerEvents: 'auto',
                  alignItems: 'center',
                  borderRadius: '$0',
                  boxSizing: 'border-box',
                  minHeight: '$5',
                  position: 'relative',
                  transition: 'background-color 50ms ease-out',
                  '@allowMotion': {
                    transition:
                      'background-color 50ms ease-out, transform 150ms ease-out'
                  }
                }}
              >
                <ToastContext.Provider value={toast}>
                  {typeof children === 'function' ? (
                    children(toast)
                  ) : React.isValidElement(children) ? (
                    children
                  ) : (
                    <ToastBadge />
                  )}
                </ToastContext.Provider>
              </Flex>
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
    throw new Error(
      'useSectionMessageContext must be used within a SectionMessageProvider'
    )
  }

  return context
}

ToastProvider.displayName = 'ToastProvider'
