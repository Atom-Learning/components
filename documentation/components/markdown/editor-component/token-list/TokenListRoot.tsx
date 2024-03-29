import { Flex, styled } from '@atom-learning/components'

import * as React from 'react'

type TokenListRootProps = React.ComponentProps<typeof Flex> & {
  ItemComponent: any // typeof TokenListItem,
  allTokens?: Record<string, string>
  specificTokens?: { token: string }[]
  filter?: ({ key, value }) => boolean
}

const StyledTokenList = styled(Flex, { padding: 0, listStyle: 'none' })

export const TokenListRoot: React.FC<TokenListRootProps> = ({
  allTokens,
  specificTokens,
  ItemComponent,
  filter = () => true,
  ...rest
}) => {
  const tokens = React.useMemo(() => {
    if (!Object.keys(allTokens || {})?.length) return []
    if (!specificTokens?.length) return allTokens
    return specificTokens.reduce((obj, { token }) => {
      const valueForToken = allTokens[token]
      if (!valueForToken) return obj
      return Object.assign(obj, {
        [token]: valueForToken
      })
    }, {})
  }, [allTokens, specificTokens])

  const listItems = React.useMemo(() => {
    const filteredListItems = []
    Object.entries(tokens).forEach(([key, value]) => {
      if (!filter?.({ key, value })) return
      filteredListItems.push(
        <ItemComponent as="li" key={key} token={key} value={value} />
      )
    })
    return filteredListItems
  }, [filter, tokens, ItemComponent])

  if (!listItems.length) return null

  return (
    <StyledTokenList wrap="wrap" {...rest}>
      {listItems}
    </StyledTokenList>
  )
}
