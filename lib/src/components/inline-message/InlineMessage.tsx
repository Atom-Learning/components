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

const InlineMessageIcon = styled(Icon, {
  flexShrink: '0',
  mr: '$2'
})

type TInlineMessageProps = React.ComponentProps<
  typeof InlineMessageContainer
> & {
  showIcon?: boolean
  size?: 'xs' | 'sm' | 'md'
}

export const InlineMessage: React.FC<TInlineMessageProps> = ({
  css,
  showIcon = true,
  theme = 'error',
  size = 'sm',
  children,
  ...rest
}) => (
  <InlineMessageContainer theme={theme} css={css} {...rest}>
    {showIcon && (
      <InlineMessageIcon
        size="sm"
        is={INLINE_MESSAGE_ICONS[theme as InlineMessageTheme]}
      />
    )}
    <Text as="span" size={size} css={{ transform: 'translateY($space$0)' }}>
      {children}
    </Text>
  </InlineMessageContainer>
)
