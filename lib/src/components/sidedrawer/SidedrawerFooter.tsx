import React from 'react'

import { Flex } from '../flex/Flex'

export const SidedrawerFooter: React.FC = ({ children }) => (
  <Flex
    css={{
      alignItems: 'center',
      borderTop: '1px solid $tonal100',
      bottom: 0,
      boxShadow: '$3',
      height: '$6',
      justifyContent: 'center',
      p: '$3',
      position: 'absolute',
      width: '100%'
    }}
  >
    {children}
  </Flex>
)
