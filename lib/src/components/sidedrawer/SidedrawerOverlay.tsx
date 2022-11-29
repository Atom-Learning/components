import React from 'react'

import { MAX_Z_INDEX } from '~/constants/zIndices'
import { fadeIn } from '~/utilities'

import { Box } from '../box'

export const SidedrawerOverlay: React.FC = () => (
  <Box
    data-testid={'sidedrawer_overlay'}
    css={{
      animation: `${fadeIn} 300ms ease-in-out`,
      animationFillMode: 'forwards',
      bg: '$alpha600',
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
