import type { Theme } from '@atom-learning/theme/lib/theme-atom'
import * as atomTheme from '@atom-learning/theme/lib/theme-atom'
import { TokenList } from './token-list'

import { DemoBox } from './DemoBox'
import * as React from 'react'

const SizeExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <DemoBox css={{ size: value }} />
    </TokenList.Item>
  )
}

type SizeTokenListProps = {
  sizes?: { token: string; name: string }[]
}

export const SizeTokenList: React.FC<SizeTokenListProps> = ({
  sizes: specificSizes,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={(atomTheme as Theme).sizes}
      specificTokens={specificSizes}
      ItemComponent={SizeExample}
      {...rest}
    />
  )
}
