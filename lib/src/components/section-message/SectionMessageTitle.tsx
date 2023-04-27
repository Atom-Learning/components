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
        mb: '$2',
        ...css
      }}
      size="md"
      {...rest}
    />
  )
}
