import React from 'react'
import { Item } from '@radix-ui/react-accordion'

export const SidedrawerAccordionItem: React.FC<
  React.ComponentProps<typeof Item>
> = ({ children, ...remainingProps }) => (
  <Item {...remainingProps}>{children}</Item>
)
