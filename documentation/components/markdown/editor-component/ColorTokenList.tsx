import { Box, Flex, Text } from '@atom-learning/components'
import { hsl, parseToHsl } from 'polished'
import * as atomTheme from '@atom-learning/theme'
import { TokenList } from './token-list'
import * as React from 'react'

const ColorExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  const color = parseToHsl(String(value))

  const hasAlpha = color.hasOwnProperty('alpha')
  return (
    <Flex css={{ alignItems: 'center' }} {...rest}>
      <Box
        css={{ borderRadius: '$round', bg: `$${token}`, size: '$6' }}
      />
      <Flex css={{ pl: '$3', flexDirection: 'column' }}>
        <Text css={{ fontWeight: 600, mb: '$3' }}>{`$${token}`}</Text>
        <Text
          size="sm"
          css={{ color: '$base6', mb: !hasAlpha ? '$3' : 0 }}
        >
          {value}
        </Text>
        {!hasAlpha && (
          <Text size="sm" css={{ color: '$base6' }}>
            {hsl(color)}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

type ColorTokenListProps = {
  colors?: { token: string, name: string }[]
}

export const ColorTokenList: React.FC<ColorTokenListProps> = ({
  colors: specificColors,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList gap={3} direction="column" allTokens={atomTheme.colors} specificTokens={specificColors} ItemComponent={ColorExample} {...rest} />
  )
}

