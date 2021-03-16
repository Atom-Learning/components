import * as React from 'react'

import { Text } from '~/components/text'

export const ValidationError = ({ css, ...remainingProps }) => (
  <Text {...remainingProps} css={{ color: '$danger', ...css }} size="sm" />
)
