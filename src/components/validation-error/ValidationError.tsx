import { Error } from '@atom-learning/icons'
import * as React from 'react'

import { Flex } from '~/components/flex'
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
  <Flex
    css={{ color: '$danger', alignItems: 'center', ...(css as any) }}
    {...remainingProps}
  >
    <Icon is={Error} size="sm" css={{ mr: '$2' }} aria-hidden />
    <Text css={{ color: 'inherit' }} size="sm">
      {children}
    </Text>
  </Flex>
)
