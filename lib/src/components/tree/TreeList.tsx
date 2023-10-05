import * as React from 'react'
import { styled } from '~/stitches'

import { Flex } from '~/components/flex'

const StyledList = styled(Flex, {
  p: 0,
  m: 0,
  listStyle: 'none',
  '--navigation-menu-vertical-item-pl': '$space$4',
  '& &': {
    '--navigation-menu-vertical-item-pl': '$space$5'
  },
  '& & &': {
    '--navigation-menu-vertical-item-pl': '$space$7'
  },
  '& & & &': {
    '--navigation-menu-vertical-item-pl': '$space$8'
  },
  '& > *:not(:first-child)': {
    mt: '$0'
  }
})

export const TreeList = (props) => <StyledList as='ul' {...props} gap={2} direction='column' />
