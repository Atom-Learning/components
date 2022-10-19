import { Box } from '@atom-learning/components'
import * as React from 'react'

export const Container: React.FC<React.ComponentProps<typeof Box>> = ({ css, children, ...rest }) => (
  <Box
    css={{
      maxWidth: 640,
      px: '$4',
      mx: 'auto',
      width: '100%',
      ...(css as any)
    }}
    {...rest}
  >
    {children}
  </Box>
)
