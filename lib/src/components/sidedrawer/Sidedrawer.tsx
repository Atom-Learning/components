import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { styled } from '~/stitches'

import { Box } from '../box/Box'
import {
  SidedrawerAccordion,
  SidedrawerAccordionContent,
  SidedrawerAccordionTrigger
} from './SidedrawerAccordion'
import { SidedrawerContent } from './SidedrawerContent'
import { SidedrawerFooter } from './SidedrawerFooter'
import { SidedrawerHeader } from './SidedrawerHeader'
import { SidedrawerItem } from './SidedrawerItem'
import { SidedrawerOverlay } from './SidedrawerOverlay'

interface SidedrawerProps {
  isOpen: boolean
}

type SidedrawerSubComponents = {
  Accordion: typeof SidedrawerAccordion
  AccordionContent: typeof SidedrawerAccordionContent
  AccordionTrigger: typeof SidedrawerAccordionTrigger
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
  SidedrawerSubComponents = ({ children, isOpen }) => {
  let overlayChild: typeof SidedrawerOverlay | null = null
  const contentChildren: React.ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === SidedrawerOverlay) {
      overlayChild = child as unknown as typeof SidedrawerOverlay
    } else {
      contentChildren.push(child)
    }
  })

  return (
    <>
      <StyledBox open={isOpen}>{contentChildren}</StyledBox>
      {isOpen && overlayChild}
    </>
  )
}

Sidedrawer.Accordion = SidedrawerAccordion
Sidedrawer.AccordionContent = SidedrawerAccordionContent
Sidedrawer.AccordionTrigger = SidedrawerAccordionTrigger
Sidedrawer.Content = SidedrawerContent
Sidedrawer.Footer = SidedrawerFooter
Sidedrawer.Header = SidedrawerHeader
Sidedrawer.Item = SidedrawerItem
Sidedrawer.Overlay = SidedrawerOverlay
