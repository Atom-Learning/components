import React from 'react'

import { Text } from '../text'

export const SectionMessageTitle = ({
  css,
  ...rest
}: React.ComponentProps<typeof Text>): JSX.Element => {
  return (
    <Text
      css={{
        fontWeight: 600,
        fontSize: '$md',
        mb: '$2',
        ...css
      }}
      {...rest}
    />
  )
}

export const SectionMessageDescription = ({
  css,
  ...rest
}: React.ComponentProps<typeof Text>): JSX.Element => {
  return (
    <Text
      css={{
        fontWeight: 400,
        fontSize: '$sm',
        color: '$grey900',
        ...css
      }}
      {...rest}
    />
  )
}
