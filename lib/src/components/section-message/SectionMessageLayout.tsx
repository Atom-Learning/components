import React from 'react'

import { Box } from '../box'
import { Flex } from '../flex'

export const SectionMessageContent = ({
  css,
  ...rest
}: React.ComponentProps<typeof Box>): JSX.Element => (
  <Box
    css={{
      maxWidth: '100%',
      flexShrink: 0,
      ['& > *:not(:last-child)']: { mb: '$2' },
      ...css
    }}
    {...rest}
  />
)

export const SectionMessageActions = ({
  css,
  ...rest
}: React.ComponentProps<typeof Flex>): JSX.Element => (
  <Box css={{ maxWidth: '100%', flexShrink: 0, ...css }}>
    <Flex wrap="wrap" gap={3} {...rest} />
  </Box>
)
