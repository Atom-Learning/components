import React from 'react'

import { Box } from '../box'
import { Stack } from '../stack'

export const SectionMessageContent = ({
  css,
  ...rest
}: React.ComponentProps<typeof Box>): JSX.Element => (
  <Box css={{ maxWidth: '100%', flexShrink: 0, ...css }} {...rest} />
)

export const SectionMessageActions = ({
  css,
  ...rest
}: React.ComponentProps<typeof Stack>): JSX.Element => (
  <Box css={{ maxWidth: '100%', flexShrink: 0, ...css }}>
    <Stack wrap="wrap" gap={3} {...rest} />
  </Box>
)
