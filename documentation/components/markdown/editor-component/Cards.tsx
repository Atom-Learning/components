import {
  Image,
  Text,
  Grid,
  Box,
  Heading,
  Flex,
  ChipToggleGroup,
  SearchInput,
  styled,
  NoOverflowWrapper,
  TileInteractive
} from '@atom-learning/components'
import { intersection } from 'lodash'
import * as React from 'react'
import { debounce } from 'throttle-debounce'

type TCardsItemProps = {
  image: string
  heading: string
  description: string
  link: { href: string; isExternal: boolean }
  tags: string | string[]
}

const CardsItem: React.FC<TCardsItemProps> = ({
  image,
  heading,
  description,
  link
}) => {
  const isLink = !!link?.href
  const elementSpecificProps = isLink
    ? {
        href: link.href,
        target: link.isExternal ? '_blank' : '_self',
        rel: link.isExternal ? 'noopener noreferrer nofollow' : ''
      }
    : {}

  return (
    <TileInteractive
      border
      borderRadius="md"
      {...elementSpecificProps}
      css={{
        color: 'inherit',
        textDecoration: 'none',
        display: 'block',
        height: '100%'
      }}
    >
      <NoOverflowWrapper>
        <Flex
          align="center"
          justify="center"
          css={{ bg: '$base2', p: '$2', aspectRatio: '$16-9' }}
        >
          {image && <Image src={image} alt="" css={{ maxHeight: '100%' }} />}
        </Flex>
        <Box css={{ p: '$4' }}>
          <Heading as="h3" size="xs" css={{ mb: '$3' }}>
            {heading}
          </Heading>
          <Text size="xs">{description}</Text>
        </Box>
      </NoOverflowWrapper>
    </TileInteractive>
  )
}

const StyledUl = styled('ul', {
  p: 0,
  m: 0
})

type CardsProps = {
  showSearch: boolean
  showTagsFilter: boolean
  items: TCardsItemProps[]
}

const checkIfMatchingTags = (itemTags, selectedTags) => {
  const isAllValueSelected = selectedTags?.includes('all')
  if (isAllValueSelected) return true
  if (typeof itemTags === 'string') {
    return selectedTags?.includes(itemTags)
  }
  if (Array.isArray(itemTags)) {
    return intersection(itemTags, selectedTags).length
  }
  return false
}

const checkIfMatchingSearch = (item, searchValue) => {
  const itemStringified = JSON.stringify(item)
  return itemStringified.toLowerCase().includes(searchValue.toLowerCase())
}

export const Cards: React.FC<CardsProps> = ({
  showSearch,
  showTagsFilter,
  items
}) => {
  const [searchValue, setSearchValue] = React.useState('')
  const handleSetSearchValue = React.useMemo(
    () => debounce(500, (value) => setSearchValue(value.toLowerCase())),
    []
  )

  const [selectedTags, setSelectedTags] = React.useState(['all'])
  const handleSelectedTagsValueChange = React.useCallback((newSelectedTags) => {
    // "All" unselects all other tags
    const hasJustToggledAll =
      newSelectedTags[newSelectedTags.length - 1] === 'all'
    if (hasJustToggledAll) return setSelectedTags(['all'])

    // Always keep "All" selected as a fallback if no value selected
    if (newSelectedTags.length === 0) return setSelectedTags(['all'])

    // Remove "All" from the tags array if other values have been selected
    if (newSelectedTags.length > 1)
      return setSelectedTags(newSelectedTags.filter((tag) => tag !== 'all'))

    setSelectedTags(newSelectedTags)
  }, [])

  const tags = React.useMemo(() => {
    const newTags = []
    const pushToTags = (tag) => {
      if (!newTags.includes(tag)) newTags.push(tag)
    }
    items.forEach(({ tags }) => {
      if (typeof tags === 'string') {
        pushToTags(tags)
      } else if (Array.isArray(tags)) {
        tags.forEach(pushToTags)
      }
    })
    return newTags
  }, [items])

  return (
    <Flex
      gap={4}
      direction="column"
      css={{ maxWidth: 1280, mx: 'auto', px: '$4' }}
    >
      {showSearch && (
        <SearchInput
          size="md"
          name="cards-search"
          placeholder="Search"
          css={{ maxWidth: 400, mx: 'auto', width: '100%' }}
          onValueChange={handleSetSearchValue}
        />
      )}
      {showTagsFilter && (
        <Box css={{ width: '100%', maxWidth: 750, mx: 'auto' }}>
          <ChipToggleGroup
            justify="center"
            type="multiple"
            value={selectedTags}
            onValueChange={handleSelectedTagsValueChange}
          >
            <ChipToggleGroup.Item value="all">All</ChipToggleGroup.Item>
            {tags.map((tag) => (
              <ChipToggleGroup.Item key={tag} value={tag}>
                {tag}
              </ChipToggleGroup.Item>
            ))}
          </ChipToggleGroup>
        </Box>
      )}
      <Grid
        as={StyledUl}
        css={{
          width: '100%',
          gap: '$5 $4',
          gridTemplateColumns: '1fr',
          '@sm': { gridTemplateColumns: '1fr 1fr' },
          '@lg': { gridTemplateColumns: '1fr 1fr 1fr' },
          '@xl': { gridTemplateColumns: '1fr 1fr 1fr 1fr' }
        }}
      >
        {items.map((props) => {
          if (
            !checkIfMatchingTags(props.tags, selectedTags) ||
            !checkIfMatchingSearch(props, searchValue)
          )
            return null
          return (
            <Box key={props.heading} as="li" css={{ listStyle: 'none' }}>
              <CardsItem {...props} />
            </Box>
          )
        })}
      </Grid>
    </Flex>
  )
}
