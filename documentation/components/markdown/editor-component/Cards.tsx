import {
  Image,
  Text,
  Grid,
  Box,
  Heading,
  Stack,
  ChipToggleGroup,
  SearchInput,
  styled
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
        as: 'a',
        href: link.href,
        target: link.isExternal ? '_blank' : '_self',
        rel: link.isExternal ? 'noopener noreferrer nofollow' : false
      }
    : {}

  return (
    <Box
      {...elementSpecificProps}
      css={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
    >
      <Box
        css={{
          background: '$base1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '$2',
          p: '$2',
          aspectRatio: '16/9'
        }}
      >
        {image && <Image src={image} alt="" css={{ maxHeight: '100%' }} />}
      </Box>
      <Heading as="h3" size="xs" css={{ mb: '$3' }}>
        {heading}
      </Heading>
      <Text size="xs">{description}</Text>
    </Box>
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
    <Stack gap={4} direction="column">
      {showSearch && (
        <SearchInput
          size="md"
          name="cards-search"
          placeholder="Search"
          css={{
            maxWidth: 400,
            mx: 'auto',
            width: '100%'
          }}
          onValueChange={handleSetSearchValue}
        />
      )}
      {showTagsFilter && (
        <Box
          css={{
            maxWidth: '100%',
            mx: 'auto',
            overflowX: 'auto'
          }}
        >
          <ChipToggleGroup
            wrap="nowrap"
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
          '@sm': { gridTemplateColumns: '1fr 1fr' }
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
    </Stack>
  )
}
