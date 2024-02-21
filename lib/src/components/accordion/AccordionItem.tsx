import { Item } from '@radix-ui/react-accordion'
import React from 'react'

import { styled } from '~/stitches'

export const AccordionItem = styled(Item, {
  width: '100%',

  '&:not(:last-child)': {
    mb: '$1'
  }
})
