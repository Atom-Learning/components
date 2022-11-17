import React from 'react'

import { Box } from '../box'

export const SidedrawerContent: React.FC = ({ children }) => (
  <Box
    css={{
      height: 'calc(100% - ($6 * 2))',
      width: '100%',
      overflowY: 'auto'
    }}
  >
    {children}
  </Box>
)
