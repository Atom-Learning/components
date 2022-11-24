import { Root } from '@radix-ui/react-accordion'
import React from 'react'
import { styled } from '~/stitches'
import { SidedrawerAccordionContent } from './SidedrawerAccordionContent'
import { SidedrawerAccordionItem } from './SidedrawerAccordionItem'
import { SidedrawerAccordionTrigger } from './SidedrawerAccordionTrigger'

type SidedrawerAccordionSubcomponents = {
  Item: typeof SidedrawerAccordionItem
  Content: typeof SidedrawerAccordionContent
  Trigger: typeof SidedrawerAccordionTrigger
}

const StyledRoot = styled(Root, {
  width: '100%'
})

interface SidedrawerAccordionProps {
  type?: 'single' | 'multiple'
}

export const SidedrawerAccordion: React.FC<SidedrawerAccordionProps> &
  SidedrawerAccordionSubcomponents = ({ children, ...remainingProps }) => (
  <StyledRoot type="single" {...remainingProps}>
    {children}
  </StyledRoot>
)

SidedrawerAccordion.Item = SidedrawerAccordionItem
SidedrawerAccordion.Content = SidedrawerAccordionContent
SidedrawerAccordion.Trigger = SidedrawerAccordionTrigger

SidedrawerAccordion.displayName = 'SidedrawerAccordion'
