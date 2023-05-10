import * as React from 'react'

import { Danger, Error, Info, OkCircle } from '@atom-learning/icons'

import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { Text } from '~/components/text'
import { styled } from '~/stitches'

const INLINE_MESSAGE_ICONS = {
  success: OkCircle,
  warning: Danger,
  info: Info,
  neutral: Info,
  error: Error
}

const InlineMessageContainer = styled(Flex, {
  variants: {
    theme: {
      success: { color: '$success' },
      warning: { color: '$warningText', '& svg': { color: '$warningDark' } },
      info: { color: '$blue800' },
      neutral: { color: '$grey800' },
      error: { color: '$danger' }
    }
  }
})

const InlineMessageIcon = styled(Icon, {
  flexShrink: '0',
  mr: '$2'
})

export type TInlineMessage = {
  showIcon?: boolean
  size?: 'xs' | 'sm' | 'md',
  theme?: keyof typeof INLINE_MESSAGE_ICONS
}

type TInlineMessageProps = Omit<React.ComponentProps<typeof InlineMessageContainer>, 'theme'> & TInlineMessage

export const InlineMessage: React.FC<TInlineMessageProps> = ({
  css,
  showIcon = true,
  theme = 'neutral',
  size = 'sm',
  children,
  ...rest
}) => {
  return (
    <InlineMessageContainer theme={theme} css={css} {...rest}>
      {showIcon && (
        <InlineMessageIcon
          size="sm"
          is={INLINE_MESSAGE_ICONS[theme]}
        />
      )}
      {children && (
        <Text as="span" size={size} css={{ transform: 'translateY($space$0)' }}>
          {children}
        </Text>
      )}
    </InlineMessageContainer>
  )
}


