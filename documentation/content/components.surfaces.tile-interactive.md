---
slug: tile-interactive
title: Tile Interactive
tabs:
  - title: Main
    content: >-
      <CodeBlock live={true} preview={true} code={`<TileGroup
      css={{background: '$grey100', p: '$3', width: '100%'}} justify="center">
        <TileInteractive onClick={() => alert('onClick')} css={{size: 100 }} borderRadius="md" />
        <TileInteractive href='/' css={{size: 100 }} borderRadius="md" border />
      </TileGroup>`} language={"tsx"} />


      ## Color Scheme


      <CodeBlock live={true} preview={true} code={`<TileGroup>
        <TileInteractive onClick={()=>alert('1')} css={{size: 100 }} borderRadius="md" border colorScheme={{ base: 'blue1' }} />
        <TileInteractive onClick={()=>alert('2')} css={{size: 100 }} borderRadius="md" border colorScheme={{ base: 'purple2' }} />
        <TileInteractive onClick={()=>alert('3')} css={{size: 100 }} borderRadius="md" border colorScheme={{ base: 'grey2' }} />
      </TileGroup>
        `} language={"tsx"} />

      ## Example use case (Card)


      <CodeBlock live={true} preview={true} code={`<TileInteractive
        href='/'
        border
        borderRadius='md'
        css={{ width: 320 }}
      >
        <NoOverflowWrapper as="article">
            <Image src="http://placekitten.com/320/200" alt="" />
            <Stack gap="4" css={{ px: '$3', py: '$4' }}>
              <Heading as="h2" size="sm">
                Cat
              </Heading>
              <Text>
                The cat (Felis catus) is a domestic species of small carnivorous mammal.
              </Text>
            </Stack>
         </NoOverflowWrapper>
      </TileInteractive>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="TileInteractive" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: 3b9bb9a0-12e5-4fbe-bb18-9f700dc91003
nestedSlug:
  - components
  - surfaces
  - tile-interactive
links:
  showReportAnIssue: true
  viewSource: components/tile-interactive
---
