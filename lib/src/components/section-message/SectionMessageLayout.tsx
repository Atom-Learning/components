import React from 'react'
import { styled } from '~/stitches'
import { Flex } from '../flex'
import { Box } from '../box'
import { Stack } from '../stack'

export const SectionMessageContent = styled(Flex, {
  maxWidth: '100%',
  flexShrink: 0,
  flexDirection: 'column',
  gap: '$2'
})

export const SectionMessageActions = ({
  css,
  ...rest
}: React.ComponentProps<typeof Stack>): JSX.Element => (
  <Box css={{ maxWidth: '100%', flexShrink: 0, ...css }}>
    <Stack wrap="wrap" gap={3} {...rest} />
  </Box>
)
