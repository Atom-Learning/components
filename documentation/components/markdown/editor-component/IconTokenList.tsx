import {
  Icon,
  SearchInput,
  Text,
  Button,
  focusVisibleStyleBlock,
  Stack,
  Box,
  Tooltip
} from '@atom-learning/components'
import * as atomIcons from '@atom-learning/icons'
import * as React from 'react'
import { debounce } from 'throttle-debounce'
import { TokenList } from './token-list'

const copyIcon = (str: string) => {
  try {
    navigator.clipboard.writeText(str)
  } catch (e) {
    // Old browser
  }
}

const IconItem: typeof TokenList.Item = ({ token, value: Component }) => (
  <Box as="li" css={{ listStyle: 'none' }}>
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button
            css={
              {
                size: '140px',
                display: 'flex',
                p: '8px',
                flexDirection: 'column',
                '&:focus-visible': {
                  ...focusVisibleStyleBlock()
                },
              }
            }
            onClick={() => copyIcon(token)}
            aria-label={`Click to copy: ${token}`}>
            <Stack gap={1} css={{ mb: '$4' }} align="center" justify="center">
              <Icon
                is={Component}
                size="sm"
              />
              <Icon
                is={Component}
                size="md"
              />
              <Icon
                is={Component}
                size="lg"
              />
            </Stack>
            <Text size="sm">
              {token}
            </Text>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Click to copy: {token}</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  </Box >
)

type IconTokenListProps = {
  icons: { token: string }[],
  showSearch: boolean
}

export const IconTokenList: React.FC<IconTokenListProps> = ({ icons: specificIconNames, showSearch }) => {
  const [searchValue, setSearchValue] = React.useState('')
  const handleSetSearchValue = React.useCallback(debounce(500, (value) => setSearchValue(value.toLowerCase())), [])


  return (
    <>
      {showSearch && (<SearchInput
        size="md"
        name="icon-search"
        placeholder="Search for an icon"
        css={{
          maxWidth: 300,
          mx: 'auto',
          width: '100%',
          mb: '$4'
        }}
        onChange={(e) => handleSetSearchValue(e.target.value)}
      />)}
      <TokenList
        gap={3}
        allTokens={atomIcons}
        specificTokens={specificIconNames}
        ItemComponent={IconItem}
        filter={({ key, value }) => !searchValue || key.toLowerCase().includes(searchValue)}
        justify="center"
      />
    </>
  )
}

