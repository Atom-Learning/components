import * as React from 'react'

import { Box } from '../..'

export const Card = () => (
  <Box
    as="section"
    css={{
      border: '1px solid #ebebeb',
      borderRadius: '$3',
      boxShadow: '$2',
      mx: 'auto',
      my: '$5',
      width: '320px'
    }}
  >
    <Box
      as="header"
      css={{ bg: '$tonal200', height: '$3', py: '$2', px: '$3' }}
    >
      <h3>Cats!</h3>
    </Box>

    <Box as="figure" css={{ p: '$3', m: 0 }}>
      <img
        src="http://placekitten.com/200/100"
        alt="Cats having a nice time"
        style={{ width: '100%' }}
      />
      <figcaption>Some cats</figcaption>
    </Box>

    <Box as="footer" css={{ p: '$3' }}>
      Remember: cats have whiskers!
    </Box>
  </Box>
)
