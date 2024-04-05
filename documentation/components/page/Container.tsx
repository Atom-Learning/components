import { Box } from '@atom-learning/components'
import * as React from 'react'

export const Container: React.FC<
  React.ComponentProps<typeof Box> & { isFullWidth?: boolean }
> = ({ css, children, isFullWidth, ...rest }) => (
  <Box
    css={{
      maxWidth: isFullWidth ? '100%' : 640,
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
