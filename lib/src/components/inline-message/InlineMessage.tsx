import * as React from 'react'

import {
  INLINE_MESSAGE_THEMES,
  INLINE_MESSAGE_ICONS
} from './InlineMessage.config'
import { Flex } from '~/components/flex'
import { Text } from '~/components/text'
import { Icon } from '~/components/icon'

import { CSS, styled } from '~/stitches'
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

interface IInlineMessageProps {
  showIcon?: boolean
  css?: CSS
  size?: 'xs' | 'sm' | 'md'
}

type TInlineMessage = React.ComponentProps<typeof InlineMessageContainer> &
  IInlineMessageProps

export const InlineMessage: React.FC<TInlineMessage> = ({
  css,
  showIcon = true,
  theme = 'error',
  size = 'sm',
  children
}) => (
  <InlineMessageContainer theme={theme} css={css}>
    {showIcon && (
      <InlineMessageIcon
        size="sm"
        is={INLINE_MESSAGE_ICONS[theme as InlineMessageTheme]}
      />
    )}
    <Text as="span" size={size} css={{ color: 'inherit', mt: '$0' }}>
      {children}
    </Text>
  </InlineMessageContainer>
)
