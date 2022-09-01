import * as React from 'react'

import {
  INLINE_MESSAGE_THEMES,
  INLINE_MESSAGE_ICONS
} from './InlineMessage.config'
import { Flex } from '~/components/flex'
import { Text } from '~/components/text'
import { Icon } from '~/components/icon'

import { styled } from '~/stitches'
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
    <Text as="span" size={size} css={{ color: 'inherit', mt: '$0' }}>
      {children}
    </Text>
  </InlineMessageContainer>
)
