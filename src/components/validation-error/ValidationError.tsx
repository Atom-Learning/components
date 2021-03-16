import * as React from 'react'

import { Text } from '~/components/text'
import { CSS } from '~/stitches'

type ValidationErrorProps = {
  css?: CSS
}

export const ValidationError: React.FC<ValidationErrorProps> = ({
  css,
  ...remainingProps
}) => (
  <Text
    css={{ color: '$danger', ...(css as any) }}
    size="sm"
    {...remainingProps}
  />
)
