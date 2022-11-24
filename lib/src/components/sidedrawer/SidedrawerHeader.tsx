import React from 'react'

import { Box } from '../box'
import { TopBar } from '../top-bar'

export const SidedrawerHeader: React.FC = ({ children }) => (
  <Box
    css={{
      '> div': {
        width: '100%'
      }
    }}
  >
    <TopBar
      css={{
        mx: '$3'
      }}
    >
      {children}
    </TopBar>
  </Box>
)
