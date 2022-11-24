import React from 'react'
import { Item } from '@radix-ui/react-accordion'
import { SidedrawerAccordionTrigger } from './SidedrawerAccordionTrigger'
import { SidedrawerAccordionContent } from './SidedrawerAccordionContent'

type SidedrawerAccordionItemProps = React.ComponentProps<typeof Item>

export const SidedrawerAccordionItem: React.FC<
  SidedrawerAccordionItemProps
> = ({ children, value, ...remainingProps }) => (
  <Item value={value} {...remainingProps}>
    {React.Children.map(children, (child) => {
      const isTrigger =
        React.isValidElement(child) && child.type === SidedrawerAccordionTrigger
      const isContent =
        React.isValidElement(child) && child.type === SidedrawerAccordionContent

      if (!isTrigger && !isContent) {
        throw new Error(
          'Only Sidedrawer.AccordionTrigger and Sidedrawer.AccordionContent can be the passed as a "children" of SidedrawerAccordionItem'
        )
      }

      return child
    })}
  </Item>
)
