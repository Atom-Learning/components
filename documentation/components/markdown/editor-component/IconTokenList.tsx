import {
  Icon,
  SearchInput,
  Text,
  Button,
  focusVisibleStyleBlock,
  Flex,
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

type TIconItemProps = React.ComponentProps<typeof TokenList.Item> & {
  value: React.FC<React.SVGProps<SVGSVGElement>>
}

const IconItem: React.FC<TIconItemProps> = ({ token, value: Component }) => {
  return (
    <Box as="li" css={{ listStyle: 'none' }}>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Flex
            as="button"
            direction="column"
            gap="4"
            css={{
              bg: 'unset',
              border: 'unset',
              cursor: 'pointer',
              width: '140px',
              p: '$4',
              '&:focus-visible': focusVisibleStyleBlock()
            }}
            onClick={() => copyIcon(token)}
            aria-label={`Click to copy: ${token}`}
          >
            <Flex gap={3} align="center" justify="center">
              <Icon is={Component} size="sm" css={{ color: '$primary700' }} />
              <Icon is={Component} size="md" css={{ color: '$primary700' }} />
              <Icon is={Component} size="lg" css={{ color: '$primary800' }} />
            </Flex>
            <Text css={{ color: '$textSubtle' }} size="sm">
              {token}
            </Text>
          </Flex>
        </Tooltip.Trigger>
        <Tooltip.Content>Click to copy: {token}</Tooltip.Content>
      </Tooltip>
    </Box>
  )
}

type IconTokenListProps = {
  icons: { token: string }[]
  showSearch: boolean
}

export const IconTokenList: React.FC<IconTokenListProps> = ({
  icons: specificIconNames,
  showSearch
}) => {
  const [searchValue, setSearchValue] = React.useState('')
  const handleSetSearchValue = React.useMemo(
    () => debounce(500, (value) => setSearchValue(value.toLowerCase())),
    []
  )

  return (
    <>
      {showSearch && (
        <SearchInput
          size="md"
          name="icon-search"
          placeholder="Search for an icon"
          css={{
            maxWidth: 400,
            mx: 'auto',
            width: '100%',
            mb: '$4'
          }}
          onChange={(e) => handleSetSearchValue(e.target.value)}
        />
      )}
      <TokenList
        css={{ mx: '-$4', '@xl': { mx: '-176px' } }}
        gap={24}
        allTokens={atomIcons}
        specificTokens={specificIconNames}
        ItemComponent={IconItem}
        filter={({ key, value }) =>
          !searchValue || key.toLowerCase().includes(searchValue)
        }
        justify="center"
      />
    </>
  )
}
