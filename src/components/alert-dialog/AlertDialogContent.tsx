import { Content, Overlay } from '@radix-ui/react-alert-dialog'
import * as React from 'react'

import { keyframes, styled } from '~/stitches'

const contentOnScreen = 'translate3d(-50%, -50%, 0)'
const contentOffScreen = 'translate3d(-50%, 50vh, 0)'

const slideIn = keyframes({
  '0%': { transform: contentOffScreen },
  '100%': { transform: contentOnScreen }
})
const slideOut = keyframes({
  '0%': { transform: contentOnScreen },
  '100%': { transform: contentOffScreen }
})

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})
const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const StyledAlertDialogOverlay = styled(Overlay, {
  backgroundColor: '$alpha600',
  inset: 0,
  position: 'fixed',
  '&[data-state="open"]': {
    animation: `${fadeIn} 250ms ease-out`
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 550ms ease-out`
  }
})

const StyledAlertDialogContent = styled(Content, {
  bg: 'white',
  borderRadius: '$2',
  boxShadow: '$3',
  boxSizing: 'border-box',
  left: '50%',
  maxWidth: '90vw',
  p: '$4',
  position: 'fixed',
  top: '50%',
  transform: contentOnScreen,
  '&:focus': {
    outline: 'none'
  },
  '&[data-state="open"]': {
    animation: `${slideIn} 550ms cubic-bezier(0.22, 1, 0.36, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 550ms cubic-bezier(0.22, 1, 0.36, 1)`
  },
  variants: {
    size: {
      xs: { width: '380px' },
      sm: { width: '480px' },
      md: { width: '600px' },
      lg: { width: '800px' }
    }
  }
})

type AlertDialogContentProps = React.ComponentProps<
  typeof StyledAlertDialogContent
>

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  size = 'sm',
  ...remainingProps
}) => (
  <>
    <StyledAlertDialogOverlay />
    <StyledAlertDialogContent size={size} {...remainingProps} />
  </>
)
