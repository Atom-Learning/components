import { Stack, styled } from '@atom-learning/components'
import { TokenListItem } from './TokenListItem'

import * as React from 'react'

type TokenListRootProps = React.ComponentProps<typeof Stack> & {
  ItemComponent: typeof TokenListItem,
  allTokens?: Record<string, string>,
  specificTokens?: { token: string }[],
  filter?: ({ key, value }) => boolean
}

const StyledTokenList = styled('ul', { padding: 0, listStyle: 'none' })

export const TokenListRoot: React.FC<TokenListRootProps> = ({
  allTokens,
  specificTokens,
  ItemComponent,
  filter = () => true,
  ...rest
}) => {
  const tokens = React.useMemo(() => {
    if (!Object.keys(allTokens || {})?.length) return [];
    if (!specificTokens?.length) return allTokens
    return specificTokens.reduce((obj, { token }) => {
      const valueForToken = allTokens[token];
      if (!valueForToken) return obj;
      return Object.assign(obj, {
        [token]: valueForToken
      });
    }, {})
  }, [allTokens, specificTokens])

  const listItems = React.useMemo(() => {
    const filteredListItems = []
    Object.entries(tokens).forEach(([key, value]) => {
      if (!filter?.({ key, value })) return
      filteredListItems.push(<ItemComponent as="li" key={key} token={key} value={value} />)
    })
    return filteredListItems
  }, [filter, tokens, ItemComponent])

  if (!listItems.length) return null;

  return (
    <Stack as={StyledTokenList} gap={false} {...rest}>
      {listItems}
    </Stack>
  )
}

