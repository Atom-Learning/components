---
slug: tile
title: Tile
tabs:
  - title: Main
    content: >-
      Tile is a fundamental layout component used as a generic container to
      build the base of panels, cards, lists and other content components that
      group information.


      Tiles can include images, text, buttons, links, badges, icons, etc.  Tile has styles but no functional logic in itself, and it is also used to provide common styles for `TileInteractive` and `TileToggleGroup` which are interactive elements.


      ## Border


      <CodeBlock live={true} preview={true} code={`<TileGroup css={{background: '$grey100', p: '$3', width: '100%'}} justify="center">
        <Tile css={{size: 100 }} />
        <Tile css={{size: 100 }} border />
      </TileGroup>`} language={"tsx"} />


      ## Border Radius


      <CodeBlock live={true} preview={true} code={`<TileGroup>
        <Tile css={{size: 100 }} border />
        <Tile borderRadius="sm" css={{size: 100 }} border />
        <Tile borderRadius="md" css={{size: 100 }} border />
        <Tile borderRadius="lg" css={{size: 100 }} border />
      </TileGroup>`} language={"tsx"} />


      ## Color Scheme


      You can pass in a `colorScheme` object to the `Tile` to customise the colours of the component. Defaults to `{ base: "grey1", accent: "blue2", interactive: "loContrast"}` 


      ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options on the repository's github.


      <CodeBlock live={true} preview={true} code={`<TileGroup>
        <Tile css={{size: 100 }} border colorScheme={{ base: 'blue1' }} />
        <Tile css={{size: 100 }} border colorScheme={{ base: 'blue2' }} />
        <Tile css={{size: 100 }} border colorScheme={{ base: 'purple2' }} />
        <Tile css={{size: 100 }} border colorScheme={{ base: 'grey2' }} />
      </TileGroup>`} language={"tsx"} />


      ## Example use case (Card)


      <CodeBlock live={true} preview={true} code={`<Tile
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
      </Tile>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Tile" />


      <ComponentProps component="Tile.NoOverflowContainer" />


      <ComponentProps component="TileGroup" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: 3b9bb9a0-12e5-4fbe-bb18-9f700dc91003
nestedSlug:
  - components
  - surfaces
  - tile
links:
  viewSource: components/tile
  showReportAnIssue: true
---
