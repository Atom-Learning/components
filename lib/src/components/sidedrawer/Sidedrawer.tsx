import { Dialog } from '@radix-ui/react-dialog'
import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'

import { Box } from '../box/Box'
import {
  SidedrawerAccordionContent,
  SidedrawerAccordionTrigger
} from './SidedrawerAccordion'
import { SidedrawerClose } from './SidedrawerClose'
import { SidedrawerContent } from './SidedrawerContent'
import { SidedrawerFooter } from './SidedrawerFooter'
import { SidedrawerHeader } from './SidedrawerHeader'
import { SidedrawerItem } from './SidedrawerItem'
import { SidedrawerOverlay } from './SidedrawerOverlay'

interface SidedrawerProps {
  isOpen: boolean
  onClose: () => void
}

type SidedrawerSubComponents = {
  AccordionContent: typeof SidedrawerAccordionContent
  AccordionTrigger: typeof SidedrawerAccordionTrigger
  Close: typeof SidedrawerClose
  Content: typeof SidedrawerContent
  Footer: typeof SidedrawerFooter
  Header: typeof SidedrawerHeader
  Item: typeof SidedrawerItem
  Overlay: typeof SidedrawerOverlay
}

const StyledBox = styled(Box, {
  bg: 'white',
  boxShadow: '$2',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  maxWidth: '304px',
  translate: '-304px 0',
  transition: 'translate 300ms ease-in-out',
  width: '100%',
  zIndex: MAX_Z_INDEX,
  variants: {
    open: {
      true: {
        translate: '0 0'
      }
    }
  }
})

export const Sidedrawer: React.FC<React.PropsWithChildren<SidedrawerProps>> &
  SidedrawerSubComponents = ({ children, isOpen, onClose }) => {
  let overlayChild: typeof SidedrawerOverlay | null = null
  const contentChildren: React.ReactNode[] = []

  const handleCloseOnEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleCloseOnEscape)

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape)
    }
  }, [])

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === SidedrawerOverlay) {
      overlayChild = child as unknown as typeof SidedrawerOverlay
    } else {
      contentChildren.push(child)
    }
  })

  return (
    <>
      <Dialog>
        <StyledBox open={isOpen}>{contentChildren}</StyledBox>
      </Dialog>
      {isOpen && <Box onClick={onClose}>{overlayChild}</Box>}
    </>
  )
}

Sidedrawer.AccordionContent = SidedrawerAccordionContent
Sidedrawer.AccordionTrigger = SidedrawerAccordionTrigger
Sidedrawer.Close = SidedrawerClose
Sidedrawer.Content = SidedrawerContent
Sidedrawer.Footer = SidedrawerFooter
Sidedrawer.Header = SidedrawerHeader
Sidedrawer.Item = SidedrawerItem
Sidedrawer.Overlay = SidedrawerOverlay
