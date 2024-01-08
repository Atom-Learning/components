import { Stack } from '@atom-learning/components'
import type { Theme } from '@atom-learning/theme/lib/theme-atom'
import * as atomTheme from '@atom-learning/theme/lib/theme-atom'
import { TokenList } from './token-list'

import { DemoBox } from './DemoBox'
import * as React from 'react'

const SpaceExample: typeof TokenList.Item = ({ token, value, ...rest }) => {
  return (
    <TokenList.Item token={token} value={value} {...rest}>
      <Stack gap={Number(token.replace(/^\$+/, ''))}>
        <DemoBox />
        <DemoBox />
      </Stack>
    </TokenList.Item>
  )
}

type SpaceTokenListProps = {
  spaces?: { token: string; name: string }[]
}

export const SpaceTokenList: React.FC<SpaceTokenListProps> = ({
  spaces: specificSpaces,
  ...rest
}) => {
  return (
    // @ts-ignore
    <TokenList
      direction="column"
      allTokens={(atomTheme as Theme).space}
      specificTokens={specificSpaces}
      ItemComponent={SpaceExample}
      {...rest}
    />
  )
}
