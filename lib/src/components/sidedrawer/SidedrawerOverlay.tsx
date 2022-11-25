import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'

import { Box } from '../box'

const fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}

export const SidedrawerOverlay: React.FC = () => (
  <Box
    css={{
      animation: `${fadeIn} 100ms ease-out`,
      bg: '$tonal600',
      cursor: 'pointer',
      height: '100vh',
      left: '0',
      opacity: '0.6',
      position: 'fixed',
      top: '0',
      width: '100vw',
      zIndex: MAX_Z_INDEX - 1
    }}
  />
)
