import { Box } from '@atom-learning/components'
import * as React from 'react'

export const Container: React.FC<{ css?: any }> = ({ css, children }) => (
  <Box
    css={{
      maxWidth: 640,
      mx: 'auto',
      width: '100%',
      ...(css as any)
    }}
  >
    {children}
  </Box>
)
