import type { Theme } from '@atom-learning/theme'
import * as atomTheme from '@atom-learning/theme'
import { TokenList } from './token-list'
import { DemoBox } from './DemoBox'
import * as React from 'react'

const RadiusExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <DemoBox css={{ borderRadius: value }} />
    </TokenList.Item>
  )
}

type RadiusTokenListProps = {
  radii?: { token: string; name: string }[]
}

export const RadiusTokenList: React.FC<RadiusTokenListProps> = ({
  radii: specificRadii,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={(atomTheme as Theme).radii}
      specificTokens={specificRadii}
      ItemComponent={RadiusExample}
      {...rest}
    />
  )
}
