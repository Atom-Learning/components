import * as React from 'react'

import { Text } from '~/components/text'
import type { CSS } from '~/stitches'

type DescriptionProps = {
  css?: CSS
}

export const Description = ({
  children,
  css
}: React.PropsWithChildren<DescriptionProps>) => (
  <Text size="sm" css={{ color: '$grey700', maxWidth: '80ch', ...css }}>
    {children}
  </Text>
)
