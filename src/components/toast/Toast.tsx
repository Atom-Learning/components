import 'react-toastify/dist/ReactToastify.css'

import { Close as CloseIcon } from '@atom-learning/icons'
import * as React from 'react'
import { cssTransition, ToastContainer } from 'react-toastify'

import { keyframes, styled } from '~/stitches'

import { Icon } from '../icon'
// TODO: content is dragable why?
// TODO: closeOnClick not working

const toastSize = '44px'
const toastOffset = '32px'
const contentIn = `translate3d(0, -calc(${toastSize + toastOffset}), 0)`
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

const StyledToast = styled(ToastContainer, {
  position: 'fixed',
  zIndex: '10000 !important',
  '@sm': {
    left: '50%',
    top: '$4',
    transform: 'translateX(-50%)'
  },
  '@media (max-width: 549px)': {
    left: 0,
    right: 0,
    top: 0
  },
  '.Toastify__toast': {
    alignItems: 'center',
    borderRadius: '$0',
    boxShadow: '$1',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: '$sans',
    fontWeight: 400,
    justifyContent: 'space-between',
    mb: '$2',
    minHeight: 60,
    px: '$2',
    py: '$3',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    zIndex: 10000,
    '@sm': {
      minHeight: toastSize,
      width: 360
    },
    '@media (max-width: 549px)': {
      width: 'unset' // needed to show the close button in extremely small vp
    }
  },
  '.Toastify__progress-bar': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
    bottom: 0,
    left: 0,
    height: 5,
    position: 'absolute',
    width: '100%',
    transformOrigin: 'left',
    opacity: 0.7,
    zIndex: 9999
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
    animation: `${progress} linear 1 forwards`
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

const CloseButton = ({ closeToast }) => (
  <Icon
    css={{
      display: 'flex',
      padding: 'unset',
      right: 0,
      top: 0,
      '& > svg': {
        fill: 'currentColor',
        margin: 'auto'
      }
    }}
    is={CloseIcon}
    onClick={() => {
      alert(1)
      closeToast
    }}
    // onClick={closeToast}
  />
)

type ToastProps = React.ComponentPropsWithoutRef<typeof StyledToast>

export const Toast: React.FC<ToastProps> = (props) => {
  return (
    <StyledToast
      position="top-center"
      // autoClose={5000}
      autoClose={false}
      pauseOnFocusLoss={false}
      transition={Zoom}
      closeButton={CloseButton}
      // closeOnClick
      {...props}
    />
  )
}

Toast.displayName = 'Toast'
