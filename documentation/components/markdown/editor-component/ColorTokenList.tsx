import { Box, Flex, Text } from '@atom-learning/components'
import { hsl, parseToHsl } from 'polished'
import type { Theme } from '@atom-learning/theme/lib/theme-atom'
import * as atomTheme from '@atom-learning/theme/lib/theme-atom'
import * as questTheme from '@atom-learning/theme/lib/theme-quest'
import { TokenList } from './token-list'
import * as React from 'react'
import { useTheme } from '~/utilities/hooks/useTheme'

const ColorExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  const color = parseToHsl(String(value))

  const hasAlpha = color.hasOwnProperty('alpha')
  return (
    <Flex align="center" {...rest}>
      <Box css={{ borderRadius: '$round', bg: `$${token}`, size: '$6' }} />
      <Flex direction="column" css={{ pl: '$3' }}>
        <Text weight="bold" css={{ mb: '$3' }}>{`$${token}`}</Text>
        <Text size="sm" css={{ color: '$base8', mb: !hasAlpha ? '$3' : 0 }}>
          {value}
        </Text>
        {!hasAlpha && (
          <Text size="sm" css={{ color: '$base8' }}>
            {hsl(color)}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

type ColorTokenListProps = {
  colors?: { token: string; name: string }[]
}

export const ColorTokenList: React.FC<ColorTokenListProps> = ({
  colors: specificColors,
  ...rest
}) => {
  const { theme } = useTheme()
  const tokens = theme === 'atom' ? atomTheme : questTheme
  return (
    // @ts-ignore
    <TokenList
      gap={3}
      direction="column"
      allTokens={(tokens as Theme).colors}
      specificTokens={specificColors}
      ItemComponent={ColorExample}
      {...rest}
    />
  )
}
