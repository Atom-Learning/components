import * as atomTheme from '@atom-learning/theme'
import { TokenList } from './token-list'

import { DemoBox } from './DemoBox'
import * as React from 'react'

const ShadowExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <DemoBox css={{ boxShadow: value }} />
    </TokenList.Item>
  )
}

type ShadowTokenListProps = {
  shadows?: { token: string; name: string }[]
}

export const ShadowTokenList: React.FC<ShadowTokenListProps> = ({
  shadows: specificShadows,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={atomTheme.shadows}
      specificTokens={specificShadows}
      ItemComponent={ShadowExample}
      {...rest}
    />
  )
}
