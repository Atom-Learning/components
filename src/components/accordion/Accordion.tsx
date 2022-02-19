import { Root } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

import { AccordionContent } from './AccordionContent'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'

const StyledRoot = styled(Root, {
  width: '100%'
})

// TODO: this isn't perfect, trying to find a fix from creators,
// will hopefully fix in another PR in the future
type AccordionProps = React.ComponentProps<typeof StyledRoot> & {
  type: 'single'
}

export const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem
  Content: typeof AccordionContent
  Trigger: typeof AccordionTrigger
} = ({ type = 'single', children, ...remainingProps }) => (
  <StyledRoot type={type} {...remainingProps}>
    {children}
  </StyledRoot>
)

Accordion.Item = AccordionItem
Accordion.Content = AccordionContent
Accordion.Trigger = AccordionTrigger

Accordion.displayName = 'Accordion'
