import { Root } from '@radix-ui/react-accordion'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'
import { AccordionContent } from './AccordionContent'

import React from 'react'

import { styled } from '~/stitches'

const StyledRoot = styled(Root, {
  width: '100%'
})

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
