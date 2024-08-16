import { Close as CloseIcon } from '@atom-learning/icons'
import { Close, Content, Overlay, Portal } from '@radix-ui/react-dialog'
import * as React from 'react'

import { DIALOG_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'
import { backdropOverlay } from '~/utilities/style/backdrop-overlay'
import { DialogContext } from './Dialog'

import { ActionIcon } from '../action-icon/ActionIcon'
import { Icon } from '../icon/Icon'
import { DialogBackground } from './DialogBackground'
import { Box } from '../box'

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

const StyledDialogOverlay = styled(Overlay, { ...backdropOverlay, ['&[data-state="closed"]']: { display: 'none' } })

const StyledDialogContent = styled(Content, {
  bg: 'white',
  borderRadius: '$1',
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
  ['&[data-state="closed"]']: { display: 'none' },
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
      xs: { width: '380px' },
      sm: { width: '480px' },
      md: { width: '600px' },
      lg: { width: '800px' },
      xl: { width: '1100px' },
      fullscreen: {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        borderRadius: 'unset',
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

export const DialogContent: React.ForwardRefExoticComponent<DialogContentProps> = React.forwardRef(({
  size = 'sm',
  children,
  closeDialogText = 'Close dialog',
  showCloseButton = true,
  forceMount,
  ...remainingProps
}, ref) => {
  const { open } = React.useContext(DialogContext)
  const dialogBackgrounds: React.ReactChild[] = []
  const dialogContents: (React.ReactChild | React.ReactFragment)[] = []
  React.Children.toArray(children).forEach(
    (child) =>
      React.isValidElement(child) && child?.type === DialogBackground ? dialogBackgrounds.push(child) : dialogContents.push(child)

  )

  console.log({ open }, forceMount && !open)
  if (forceMount && !open) return (
    <Box css={{ display: 'none' }} ref={ref}>
      {dialogContents}
    </Box>
  )

  return (
    <Portal>
      <StyledDialogOverlay id={modalOverlayId}>
        {dialogBackgrounds}
        <StyledDialogContent
          ref={ref}
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
          {dialogContents}
        </StyledDialogContent>
      </StyledDialogOverlay>
    </Portal>
  )
})
