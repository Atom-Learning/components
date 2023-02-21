import { Text } from '@atom-learning/components'
import * as atomTheme from '@atom-learning/theme'
import { TokenList } from './token-list'

import * as React from 'react'

const FontFamilyExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <Text css={{ fontFamily: value, fontSize: '$xl' }}>Abc-Xyz</Text>
    </TokenList.Item>
  )
}

type FontFamilyTokenListProps = {
  fontFamilies?: { token: string, name: string }[]
}

export const FontFamilyTokenList: React.FC<FontFamilyTokenListProps> = ({
  fontFamilies: specificFontFamilies,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList direction="column" allTokens={atomTheme.fonts} specificTokens={specificFontFamilies} ItemComponent={FontFamilyExample} {...rest} />
  )
}

