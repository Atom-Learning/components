import React from 'react'
import { Item } from '@radix-ui/react-accordion'

type SidedrawerAccordionItemProps = React.ComponentProps<typeof Item>

export const SidedrawerAccordionItem: React.FC<
  SidedrawerAccordionItemProps
> = ({ children, value, ...remainingProps }) => (
  <Item value={value} {...remainingProps}>
    {children}
  </Item>
)
