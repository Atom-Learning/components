import { Content, Overlay, Portal } from '@radix-ui/react-alert-dialog'
import * as React from 'react'

import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'
import { fadeIn, fadeOut } from '~/utilities'

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

const StyledAlertDialogOverlay = styled(Overlay, {
  backgroundColor: '$alpha600',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'fixed',
  zIndex: DIALOG_Z_INDEX,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 550ms ease-out`
    }
  }
})

const StyledAlertDialogContent = styled(Content, {
  bg: 'white',
  borderRadius: '$1',
  boxShadow: '$3',
  boxSizing: 'border-box',
  left: '50%',
  maxWidth: '90vw',
  p: '$5',
  position: 'fixed',
  top: '50%',
  transform: contentOnScreen,
  '&:focus': {
    outline: 'none'
  },
  zIndex: DIALOG_Z_INDEX,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${slideIn} 550ms cubic-bezier(0.22, 1, 0.36, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 550ms cubic-bezier(0.22, 1, 0.36, 1)`
    }
  },
  variants: {
    size: {
      sm: { width: '380px' },
      md: { width: '480px' },
      lg: { width: '600px' }
    }
  }
})

export const AlertDialogContent = ({
  size = 'sm',
  ...remainingProps
}: React.ComponentProps<typeof StyledAlertDialogContent>) => (
  <Portal>
    <StyledAlertDialogOverlay />
    <StyledAlertDialogContent size={size} {...remainingProps} />
  </Portal>
)
