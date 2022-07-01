import * as React from 'react'

import { Text } from '~/components/text'
import type { CSS } from '~/stitches'

type DescriptionProps = {
  css?: CSS
}

export const Description: React.FC<DescriptionProps> = ({ children, css }) => (
  <Text size="sm" css={{ color: '$tonal300', maxWidth: '80ch', ...css }}>
    {children}
  </Text>
)
