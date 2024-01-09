import { Text } from '@atom-learning/components'
import type { Theme } from '@atom-learning/theme/lib/theme-atom'
import * as atomTheme from '@atom-learning/theme/lib/theme-atom'
import * as questTheme from '@atom-learning/theme/lib/theme-quest'
import { TokenList } from './token-list'

import * as React from 'react'
import { useTheme } from '~/utilities/hooks/useTheme'

const FontFamilyExample: typeof TokenList.Item = ({
  token,
  value,
  ...rest
}) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <Text css={{ fontFamily: value, fontSize: '$xl' }}>Abc-Xyz</Text>
    </TokenList.Item>
  )
}

type FontFamilyTokenListProps = {
  fontFamilies?: { token: string; name: string }[]
}

export const FontFamilyTokenList: React.FC<FontFamilyTokenListProps> = ({
  fontFamilies: specificFontFamilies,
  ...rest
}) => {
  const { theme } = useTheme()
  const tokens = theme === 'atom' ? atomTheme : questTheme
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={(tokens as Theme).fonts}
      specificTokens={specificFontFamilies}
      ItemComponent={FontFamilyExample}
      {...rest}
    />
  )
}
