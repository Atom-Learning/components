import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { keyframes, styled } from '~/stitches'

import {
  SidedrawerAccordionContent,
  SidedrawerAccordionItem,
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
  Accordion: typeof SidedrawerAccordionItem
  AccordionContent: typeof SidedrawerAccordionContent
  AccordionTrigger: typeof SidedrawerAccordionTrigger
  Close: typeof SidedrawerClose
  Content: typeof SidedrawerContent
  Footer: typeof SidedrawerFooter
  Header: typeof SidedrawerHeader
  Item: typeof SidedrawerItem
  Overlay: typeof SidedrawerOverlay
}

const slideIn = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' }
})

const slideOut = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-100%)' }
})

const StyledContent = styled(Dialog.Content, {
  bg: 'white',
  boxShadow: '$2',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  maxWidth: '304px',
  width: '100%',
  zIndex: MAX_Z_INDEX,
  '@allowMotion': {
    '&[data-state="open"]': {
      animation: `${slideIn} 250ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 250ms ease-out`
    }
  }
})

export const Sidedrawer: React.FC<SidedrawerProps> &
  SidedrawerSubComponents = ({ children, isOpen, onClose }) => {
  let overlayChild: typeof SidedrawerOverlay | null = null
  const contentChildren: React.ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === SidedrawerOverlay) {
      overlayChild = React.cloneElement(child, {
        'data-testid': 'sidedrawer_overlay'
      }) as unknown as typeof SidedrawerOverlay
    } else {
      contentChildren.push(child)
    }
  })

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {overlayChild}
        <StyledContent
          role="navigation"
          onEscapeKeyDown={onClose}
          onInteractOutside={onClose}
        >
          {contentChildren}
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

Sidedrawer.Accordion = SidedrawerAccordionItem
Sidedrawer.AccordionContent = SidedrawerAccordionContent
Sidedrawer.AccordionTrigger = SidedrawerAccordionTrigger
Sidedrawer.Close = SidedrawerClose
Sidedrawer.Content = SidedrawerContent
Sidedrawer.Footer = SidedrawerFooter
Sidedrawer.Header = SidedrawerHeader
Sidedrawer.Item = SidedrawerItem
Sidedrawer.Overlay = SidedrawerOverlay
