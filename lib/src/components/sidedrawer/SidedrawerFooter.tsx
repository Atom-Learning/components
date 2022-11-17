import React from 'react'

import { Box } from '../box'

export const SidedrawerFooter: React.FC = ({ children }) => (
  <Box
    css={{
      borderTop: '1px solid $tonal100',
      boxShadow: '$3',
      height: '$6',
      width: '100%',
      position: 'absolute',
      bottom: 0
    }}
  >
    {children}
  </Box>
)
