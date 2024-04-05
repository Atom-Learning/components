import * as React from 'react'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { Text } from '~/components/text'
import { styled } from '~/stitches'

import {
  INLINE_MESSAGE_ICONS,
  INLINE_MESSAGE_THEMES
} from './InlineMessage.config'
import { InlineMessageTheme } from './InlineMessage.types'

const InlineMessageContainer = styled(Flex, {
  variants: {
    theme: INLINE_MESSAGE_THEMES
  }
})

type TInlineMessageProps = React.ComponentProps<
  typeof InlineMessageContainer
> & {
  showIcon?: boolean
  size?: 'xs' | 'sm' | 'md'
}

export const InlineMessage = ({
  css,
  showIcon = true,
  theme = 'error',
  size = 'sm',
  children,
  ...rest
}: TInlineMessageProps) => (
  <InlineMessageContainer theme={theme} css={css} {...rest}>
    {showIcon && (
      <Icon
        css={{ mr: '$2' }}
        size="sm"
        is={INLINE_MESSAGE_ICONS[theme as InlineMessageTheme]}
      />
    )}
    <Text as="span" size={size} css={{ transform: 'translateY($space$0)' }}>
      {children}
    </Text>
  </InlineMessageContainer>
)
