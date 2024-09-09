import React from 'react'

import { Text } from '../text'

export const SectionMessageTitle = (props: React.ComponentProps<typeof Text>): JSX.Element => (
  <Text
    size="md"
    weight="bold"
    {...props}
  />
)
