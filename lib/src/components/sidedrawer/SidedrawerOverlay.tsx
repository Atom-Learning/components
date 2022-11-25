import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { keyframes } from '~/stitches'

import { Box } from '../box'

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 0.6
  }
})

export const SidedrawerOverlay: React.FC = () => (
  <Box
    css={{
      animation: `${fadeIn} 300ms ease-in-out`,
      animationFillMode: 'forwards',
      bg: '$tonal600',
      cursor: 'pointer',
      height: '100vh',
      left: '0',
      position: 'fixed',
      top: '0',
      width: '100vw',
      zIndex: MAX_Z_INDEX - 1
    }}
  />
)
