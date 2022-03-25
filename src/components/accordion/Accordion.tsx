import { Root } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

import { AccordionContent } from './AccordionContent'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'

const StyledRoot = styled(Root, {
  width: '100%'
})

type AccordionProps = React.ComponentProps<typeof Root> & {
  type: 'single' | 'multiple'
}

export const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem
  Content: typeof AccordionContent
  Trigger: typeof AccordionTrigger
} = ({ type = 'single', children, ...remainingProps }) => (
  // eslint-disable-next-line
  // @ts-ignore TODO: Radix has an TS error that throws a warning if you pass multiple in. Needs to be fixed by the owner
  <StyledRoot type={type} {...remainingProps}>
    {children}
  </StyledRoot>
)

Accordion.Item = AccordionItem
Accordion.Content = AccordionContent
Accordion.Trigger = AccordionTrigger

Accordion.displayName = 'Accordion'
