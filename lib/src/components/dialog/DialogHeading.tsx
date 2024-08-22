import * as React from 'react'

import { Heading } from '../heading'

export const DialogHeading = ({
  css,
  ...props
}: React.ComponentProps<typeof Heading>) => (
  <Heading
    size="sm"
    css={{
      borderBottom: '1px solid $tonal100',
      p: `0 $5 $5 $5`,
      mb: '$5',
      mx: '-$5',
      boxSizing: 'content-box',
      ...css
    }}
    {...props}
  />
)
