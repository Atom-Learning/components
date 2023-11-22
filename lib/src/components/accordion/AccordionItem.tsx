import { Item } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

const StyledItem = styled(Item, {
  width: '100%'
})

type AccordionItemProps = React.ComponentProps<typeof StyledItem>

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  ...remainingProps
}) => (
  <StyledItem value={value} {...remainingProps}>
    {children}
  </StyledItem>
)
