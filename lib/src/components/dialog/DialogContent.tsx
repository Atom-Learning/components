import { Close as CloseIcon } from '@atom-learning/icons'
import { Close, Content, Overlay, Portal } from '@radix-ui/react-dialog'
import * as React from 'react'

import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'
import { backdropOverlay } from '~/utilities/style/backdrop-overlay'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'
import { DialogBackground } from './DialogBackground'

const contentOnScreen = 'translate3d(-50%, -50%, 0)'
const contentOffScreen = 'translate3d(-50%, 50vh, 0)'
const modalOverlayId = 'modal_overlay'

const slideIn = keyframes({
  '0%': { transform: contentOffScreen },
  '100%': { transform: contentOnScreen }
})
const slideOut = keyframes({
  '0%': { transform: contentOnScreen },
  '100%': { transform: contentOffScreen }
})

const StyledDialogOverlay = styled(Overlay, backdropOverlay)

const sizeReset = {
  width: 'auto',
  height: 'auto',
  maxWidth: 'auto',
  maxHeight: 'auto',
  '@supports (height: 100svh)': {
    height: 'auto',
    maxHeight: 'auto'
  }
}
const StyledDialogContent = styled(Content, {
  bg: 'white',
  boxShadow: '$3',
  boxSizing: 'border-box',
  left: '50%',
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflowY: 'auto',
  p: '$5',
  position: 'fixed',
  top: '50%',
  transform: contentOnScreen,
  zIndex: DIALOG_Z_INDEX,
  '&:focus': {
    outline: 'none'
  },
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
      xs: {
        ...sizeReset,
        borderRadius: '$1',
        width: '380px'
      },
      sm: {
        ...sizeReset,
        borderRadius: '$1',
        width: '480px'
      },
      md: {
        ...sizeReset,
        borderRadius: '$1',
        width: '600px'
      },
      lg: {
        ...sizeReset,
        borderRadius: '$1',
        width: '800px'
      },
      xl: {
        ...sizeReset,
        borderRadius: '$1',
        width: '1100px'
      },
      fullscreen: {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        '@supports (height: 100svh)': {
          height: '100svh',
          maxHeight: '100svh'
        }
      }
    }
  }
})

type DialogContentProps = React.ComponentProps<typeof StyledDialogContent> & {
  closeDialogText?: string
  showCloseButton?: boolean
}

export const DialogContent = ({
  size = 'sm',
  children,
  closeDialogText = 'Close dialog',
  showCloseButton = true,
  ...remainingProps
}: DialogContentProps) => (
  <Portal>
    <StyledDialogOverlay id={modalOverlayId}>
      {React.Children.map(
        children,
        (child?: React.ReactElement) =>
          child?.type === DialogBackground && child
      )}
      <StyledDialogContent
        size={size}
        aria-label="Dialog"
        onPointerDownOutside={(event) => {
          const element = event.target as HTMLElement
          if (element?.id !== modalOverlayId) {
            event.preventDefault()
          }
        }}
        {...remainingProps}
      >
        {showCloseButton && (
          <ActionIcon
            as={Close}
            css={{ position: 'absolute', right: '$4', top: '$4', size: '$5' }}
            label={closeDialogText}
            hasTooltip={false}
            size="md"
            theme="neutral"
          >
            <Icon is={CloseIcon} />
          </ActionIcon>
        )}
        {React.Children.map(
          children,
          (child?: React.ReactElement) =>
            child?.type !== DialogBackground && child
        )}
      </StyledDialogContent>
    </StyledDialogOverlay>
  </Portal>
)
