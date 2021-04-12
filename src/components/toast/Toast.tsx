import 'react-toastify/dist/ReactToastify.minimal.css'

import * as React from 'react'
import { cssTransition, ToastContainer } from 'react-toastify'

import { keyframes, styled } from '~/stitches'

const toastHeight = '$sizes$3'
const toastOffset = '$sizes$4'
const contentIn = `translate3d(0, -calc(${toastHeight + toastOffset}), 0)`
const contentOut = 'translate3d(0, 0, 0)'

const progress = keyframes({
  '0%': { transform: 'scaleX(1)' },
  '100%': { transform: 'scaleX(0)' }
})

const enter = keyframes({
  '0%': { transform: contentIn },
  '100%': { transform: contentOut }
})

const exit = keyframes({
  '0%': { transform: contentOut },
  '100%': { transform: contentIn }
})

const StyledToastContainer = styled(ToastContainer, {
  position: 'fixed',
  zIndex: '10000 !important',
  borderSizing: 'border-box',
  '@sm': {
    left: '50%',
    top: '$3',
    transform: 'translateX(-50%)'
  },
  '@media (max-width: 549px)': {
    left: 0,
    right: 0,
    top: 0
  },
  '.Toastify__toast': {
    alignItems: 'center',
    boxShadow: '$0',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: '$sans',
    fontWeight: 400,
    justifyContent: 'space-between',
    mb: '$2',
    minHeight: toastHeight,
    overflow: 'hidden',
    position: 'relative',
    p: '$2',
    width: '100%',
    zIndex: 10000,
    '@sm': {
      borderRadius: '$0',
      width: 360
    },
    '@media (max-width: 549px)': {
      width: 'unset' // needed to show the close button in extremely small vp
    }
  },
  '.Toastify__toast-body': {
    width: '100%'
  },
  '.Toastify__toast--default': {
    bg: '$primary500'
  },
  '.Toastify__toast--success': {
    bg: '$success'
  },
  '.Toastify__toast--warning': {
    bg: '$warning'
  },
  '.Toastify__toast--error': {
    bg: '$danger'
  },
  '.Toastify__progress-bar--animated': {
    // This is needed even when progress bar is hidden as without it autoClose stops working
    animation: `${progress} linear 1 forwards`
  },
  '.Toastify__close-button': {
    all: 'unset',
    display: 'flex',
    height: toastHeight,
    right: 0,
    top: 0,
    '& > svg': {
      fill: 'currentColor',
      margin: 'auto',
      width: 14
    }
  },
  '.enter': {
    animation: enter
  },
  '.exit': {
    animation: exit
  }
})

const Zoom = cssTransition({
  enter: 'enter',
  exit: 'exit',
  collapseDuration: 200
})

type ToastProps = React.ComponentPropsWithoutRef<typeof StyledToastContainer>

export const ToastProvider: React.FC<ToastProps> = (props) => {
  return (
    <StyledToastContainer
      aria-live="assertive"
      draggable={false}
      pauseOnFocusLoss={false}
      hideProgressBar
      position="top-center"
      transition={Zoom}
      {...props}
    />
  )
}

ToastProvider.displayName = 'ToastProvider'
