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

export const Sidedrawer: React.FC<React.ComponentProps<typeof Dialog.Root>> &
  SidedrawerSubComponents = ({ children, ...remainingProps }) => (
  <Dialog.Root {...remainingProps}>{children}</Dialog.Root>
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
