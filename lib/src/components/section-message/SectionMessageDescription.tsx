import React from 'react'

import { Text } from '../text'

export const SectionMessageDescription = ({
  css,
  ...rest
}: React.ComponentProps<typeof Text>): JSX.Element => (
  <Text
    css={{
      color: '$grey900',
      ...css
    }}
    size="sm"
    {...rest}
  />
)
