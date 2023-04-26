import React from 'react'

import { Flex } from '../flex'
import { Stack } from '../stack'

export const SectionMessageContent = ({
  css,
  ...rest
}: React.ComponentProps<typeof Flex>): JSX.Element => {
  return (
    <Stack
      direction="column"
      css={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      {...rest}
    />
  )
}

export const SectionMessageActions = ({
  css,
  ...rest
}: React.ComponentProps<typeof Flex>): JSX.Element => {
  return <Flex css={{ flexWrap: 'wrap', gap: '$3', ...css }} {...rest} />
}
