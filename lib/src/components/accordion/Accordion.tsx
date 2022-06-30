import { Root } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

import { AccordionContent } from './AccordionContent'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'

const StyledRoot = styled(Root, {
  width: '100%'
})

type AccordionProps = React.ComponentProps<typeof StyledRoot> & {
  type: 'single' | 'multiple'
}

type AccordionType = React.ForwardRefExoticComponent<AccordionProps> & {
  Item: typeof AccordionItem
  Content: typeof AccordionContent
  Trigger: typeof AccordionTrigger
}

export const Accordion = React.forwardRef(({ type = 'single', children, ...remainingProps }, ref) => (
  // eslint-disable-next-line
  // @ts-ignore TODO: Radix has an TS error that throws a warning if you pass multiple in. Needs to be fixed by the owner
  <StyledRoot ref={ref} type={type} {...remainingProps}>
    {children}
  </StyledRoot>
)) as AccordionType

Accordion.Item = AccordionItem
Accordion.Content = AccordionContent
Accordion.Trigger = AccordionTrigger

Accordion.displayName = 'Accordion'
