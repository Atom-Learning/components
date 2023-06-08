import React from 'react'

import { Text } from '../text'

export const SectionMessageTitle = ({
  css,
  ...rest
}: React.ComponentProps<typeof Text>): JSX.Element => (
  <Text
    css={{
      fontWeight: 600,
      ...css
    }}
    size="md"
    {...rest}
  />
)
