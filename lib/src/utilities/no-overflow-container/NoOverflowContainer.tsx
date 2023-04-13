import React from 'react'

import { styled } from '~/stitches'
import { Box } from '~/components/box'

export const NoOverflowContainer = styled(Box, {
  size: '100%',
  borderRadius: 'inherit',
  overflow: 'hidden'
})

NoOverflowContainer.displayName = 'NoOverflowContainer'
