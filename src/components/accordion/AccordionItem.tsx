import { Item } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

const StyledItem = styled(Item, {
  width: '100%',
  overflow: 'hidden',

  '&:not(:last-child)': {
    mb: '$1'
  },
  '&[data-state="open"]': {
    '& [name="accordionTrigger"]': { borderRadius: '$0 $0 0 0' },
    '& [title="accordionContent"]': { borderRadius: '0 0 $0 $0' }
  },
  '&[data-state="closed"]': {
    '& [name="accordionTrigger"]': { borderRadius: '$0' }
  }
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
