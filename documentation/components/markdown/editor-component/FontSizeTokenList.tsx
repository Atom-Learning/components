import { Text } from '@atom-learning/components'
import * as atomTheme from '@atom-learning/theme'
import { TokenList } from './token-list'

import * as React from 'react'

const FontSizeExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <Text css={{ fontSize: value }}>Abc-Xyz</Text>
    </TokenList.Item>
  )
}

type FontSizeTokenListProps = {
  fontSizes?: { token: string; name: string }[]
}

export const FontSizeTokenList: React.FC<FontSizeTokenListProps> = ({
  fontSizes: specificFontSizes,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={atomTheme.fontSizes}
      specificTokens={specificFontSizes}
      ItemComponent={FontSizeExample}
      {...rest}
    />
  )
}
