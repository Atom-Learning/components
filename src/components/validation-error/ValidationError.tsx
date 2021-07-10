import { Error } from '@atom-learning/icons'
import * as React from 'react'

import { Icon } from '~/components/icon'
import { Text } from '~/components/text'
import { CSS } from '~/stitches'

type ValidationErrorProps = {
  css?: CSS
}

export const ValidationError: React.FC<ValidationErrorProps> = ({
  css,
  children,
  ...remainingProps
}) => (
  <Text
    css={{
      color: '$danger',
      display: 'flex',
      alignItems: 'center',
      ...(css as any)
    }}
    size="sm"
    {...remainingProps}
  >
    <Icon is={Error} size="sm" css={{ mr: '$2' }} aria-hidden />
    {children}
  </Text>
)
