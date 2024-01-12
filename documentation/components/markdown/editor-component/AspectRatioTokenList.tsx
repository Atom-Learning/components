import type { Theme } from '@atom-learning/theme/lib/theme-atom'
import * as atomTheme from '@atom-learning/theme/lib/theme-atom'
import { TokenList } from './token-list'

import { DemoBox } from './DemoBox'
import * as React from 'react'

const AspectRatioExample: typeof TokenList.Item = ({
  token,
  value,
  ...rest
}) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <DemoBox css={{ aspectRatio: value, width: 'auto' }} />
    </TokenList.Item>
  )
}

type AspectRatioTokenListProps = {
  ratios?: { token: string; name: string }[]
}

export const AspectRatioTokenList: React.FC<AspectRatioTokenListProps> = ({
  ratios: specificRatios,
  ...rest
}) => {
  return (
    <TokenList
      direction="column"
      allTokens={(atomTheme as Theme).ratios}
      specificTokens={specificRatios}
      ItemComponent={AspectRatioExample}
      {...rest}
    />
  )
}
