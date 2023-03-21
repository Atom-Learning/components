---
slug: tile-toggle-group
title: Tile Toggle Group
tabs:
  - title: Main
    content: >-
      <CodeBlock live={true} preview={true} code={` <TileToggleGroup
      type="multiple" gap={3} css={{background: '$grey100', p: '$3', width:
      '100%'}} justify="center">
        <TileToggleGroup.Item value="1" css={{size: 100 }} />
        <TileToggleGroup.Item value="2" css={{size: 100 }} border />
      </TileToggleGroup>`} language={"tsx"} />


      ## Color Scheme


      As it extends `Tile` this has colour schemes available to use. The `accent` and `interactive` settings are available to customise the selected state.


      <CodeBlock live={true} preview={true} code={` <TileToggleGroup type="multiple" gap={3}>
        <TileToggleGroup.Item value="1" css={{size: 100 }} border colorScheme={{ base: 'blue1' }} />
        <TileToggleGroup.Item value="2" css={{size: 100 }} border colorScheme={{ base: 'blue2' }}/>
        <TileToggleGroup.Item value="3" css={{size: 100 }} border colorScheme={{ base: 'purple1', accent: 'grey2' }}/>
        <TileToggleGroup.Item value="4" css={{size: 100 }} border colorScheme={{ accent: 'purple2' }}/>
      </TileToggleGroup>`} language={"tsx"} />


      ## Example use case (Card)


      <CodeBlock live={true} preview={true} code={`<TileToggleGroup type="multiple">
        <TileToggleGroup.Item
          value="a"
          border
          borderRadius='md'
          css={{ width: 320 }}
        >
          <Tile.NoOverflowContainer as="article">
            <Image src="http://placekitten.com/320/200" alt="" />
            <Stack gap="4" css={{ px: '$3', py: '$4' }}>
              <Heading as="h2" size="sm">
                Cat
              </Heading>
              <Text>
                The cat (Felis catus) is a domestic species of small carnivorous mammal.
              </Text>
            </Stack>
          </Tile.NoOverflowContainer>
        </TileToggleGroup.Item>
      </TileToggleGroup>

      `} language={"tsx"} />


      ## API Reference


      <ComponentProps component="TileToggleGroup.Root" />


      <ComponentProps component="TileToggleGroup.Item" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: 3b9bb9a0-12e5-4fbe-bb18-9f700dc91003
nestedSlug:
  - components
  - surfaces
  - tile-toggle-group
links:
  viewSource: components/tile-toggle-group
  showReportAnIssue: true
---
