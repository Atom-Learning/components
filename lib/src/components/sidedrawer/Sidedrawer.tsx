import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

import {
  SidedrawerAccordionContent,
  SidedrawerAccordionItem,
  SidedrawerAccordionTrigger
} from './SidedrawerAccordion'
import { SidedrawerBody } from './SidedrawerBody'
import { SidedrawerClose } from './SidedrawerClose'
import { SidedrawerContent } from './SidedrawerContent'
import { SidedrawerFooter } from './SidedrawerFooter'
import { SidedrawerHeader } from './SidedrawerHeader'
import { SidedrawerItem } from './SidedrawerItem'
import { SidedrawerTrigger } from './SidedrawerTrigger'

interface SidedrawerProps {
  isOpen: boolean
  onOpenChange: () => void
}

type SidedrawerSubComponents = {
  Accordion: typeof SidedrawerAccordionItem
  AccordionContent: typeof SidedrawerAccordionContent
  AccordionTrigger: typeof SidedrawerAccordionTrigger
  Body: typeof SidedrawerBody
  Close: typeof SidedrawerClose
  Content: typeof SidedrawerContent
  Footer: typeof SidedrawerFooter
  Header: typeof SidedrawerHeader
  Item: typeof SidedrawerItem
  Trigger: typeof SidedrawerTrigger
}

export const Sidedrawer: React.FC<SidedrawerProps> &
  SidedrawerSubComponents = ({ children, isOpen, onOpenChange }) => (
  <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
    {children}
  </Dialog.Root>
)

Sidedrawer.Accordion = SidedrawerAccordionItem
Sidedrawer.AccordionContent = SidedrawerAccordionContent
Sidedrawer.AccordionTrigger = SidedrawerAccordionTrigger
Sidedrawer.Body = SidedrawerBody
Sidedrawer.Close = SidedrawerClose
Sidedrawer.Content = SidedrawerContent
Sidedrawer.Footer = SidedrawerFooter
Sidedrawer.Header = SidedrawerHeader
Sidedrawer.Item = SidedrawerItem
Sidedrawer.Trigger = SidedrawerTrigger
