---
slug: tile-interactive
title: Tile Interactive
tabs:
  - title: Code
    content: >-
      <CodeBlock live={true} preview={true} code={`<TileGroup gap="3"
      justify="center" css={{ bg: '$grey100', p: '$3', width: '100%' }}>
        <TileInteractive onClick={() => alert('onClick')} css={{size: 100 }} borderRadius="md" />
        <TileInteractive href='/' css={{size: 100 }} borderRadius="md" border />
      </TileGroup>`} language={"tsx"} />


      ## Color Scheme


      <CodeBlock live={true} preview={true} code={`<TileGroup gap="3">
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
            <Flex direction="column" gap="4" css={{ px: '$3', py: '$4' }}>
              <Heading as="h2" size="sm">
                Cat
              </Heading>
              <Text>
                The cat (Felis catus) is a domestic species of small carnivorous mammal.
              </Text>
            </Flex>
         </NoOverflowWrapper>
      </TileInteractive>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="TileInteractive" />
  - title: Usage
    content: >-
      ## Overview


      Tile is a fundamental layout component used as a generic container to build the surface of panels, cards, lists and other content components that group information.


      Tile can wrap any content, including multiple elements of varying types and sizes, like images, text, buttons, links, badges, icons, etc.


      \

      Tile has styles but no functional logic in itself, and it is also used to provide common styles for [Tile button](/components/surfaces/tile-interactive) and [Tile toggle](/components/surfaces/tile-toggle-group) which are interactive elements.\

      \

      The tile itself doesn’t include any sizing or paddings applied.


      ![tile overview](/assets/images/tile01_overview.svg "tile overview")


      ## When to use


      You can use it to build the container box for panels, cards, lists, and other content components that group information.\

      \

      Using Tile will help us ensure we build UIs consistently and save time when designers are deciding styles and when developers are building them.


      ![Tile when to use](/assets/images/tile02_when-to-use.svg "Tile when to use")


      Default non-interactive tile. `{base: "grey1"}`


      ![tile button](/assets/images/tile03_button.svg "tile button")


      Tile button example. `{base: "grey1", accent: "blue2"}`


      ![Tile toggle](/assets/images/tile04_toggle1.svg "Tile toggle")


      ![Tile toggle single select example](/assets/images/tile05_toggle2.svg "Tile toggle single select example")


      Tile toggle (single select example). `{base: "grey1", accent: "blue2"}`


      ## Color Scheme (experimental)


      You can use colorScheme feature to customise the colours of the Tile. ColorScheme is experimental. You can read more about how it currently works and available options on [the repository's github](https://github.com/Atom-Learning/components/tree/main/lib/src/experiments/color-scheme#readme).\

      \

      In a nutshell, colorScheme introduces a component that allows for base and accent theme properties, as well as an interactive contrast mode that affects all interactive components. The 'base' property is used for the base colors of the wrapped component, while "accent" is used for highlighted and interactive elements.\

      \

      Tile defaults to `{base: "grey1", accent: "blue2"}` and both ‘Base’ and ‘Accent’ currently accept any of the following options: grey1, grey2, blue1, blue2, purple1, purple2...\

      \

      For tile, ‘Base’ determines the colour of the tile in a default/resting state (including its hover, pressed, focus), and ‘Accent’ determines the colour when the tile is selected (including its hover, pressed, focus).


      ![Tile all colorScheme options](/assets/images/tile06_color.svg "Tile all colorScheme options")


      Tile: all colorScheme options


      ### When to use 1 vs 2


      Choosing between grey1 vs grey2, or blue1 vs blue2 will most likely be determined by the background where the component is displayed and the emphasis that you want it to have against the rest of the UI elements on the page/section.\

      \

      Most of our UI components in Atom will normally use base:grey1 and accent:blue1, and you can mix-match any of these.


      ![Tile using different base colorScheme for different backgrounds](/assets/images/tile07_basecolor.svg "Tile using different base colorScheme for different backgrounds")


      Tile using different base colorScheme for different backgrounds


      ![Tile using different accent colorScheme for different backgrounds when selected](/assets/images/tile08_accentcolor.svg "Tile using different accent colorScheme for different backgrounds when selected")


      ### States


      ![Tile states](/assets/images/tile09_states.svg "Tile states")


      States for Tile button `{base: "grey1", accent: "blue2"}`


      ### Elevation


      When the user hovers over an interactive Tile, it has an elevation defined by a shadow and a position change.


      ## Do's and Don'ts


      <DosAndDonts items={[{"type":"do","description":"When possible, user border colour to separate the tile from the background.","image":"/assets/images/tile11_do.svg"},{"type":"dont","description":"Don't use too pale text inside tiles to avoid accessibility issues.","image":"/assets/images/tile12_dont.svg"},{"type":"do","description":"Group Tiles by theme using the same colorScheme and consistent styles.","image":"/assets/images/tile13_do.svg"},{"type":"avoid","description":"Using mismatching tiles with different styles when they are part of the same group."}]} />
parent: J3bsmpB7-_uuqm05peuTA
uuid: 3b9bb9a0-12e5-4fbe-bb18-9f700dc91003
nestedSlug:
  - components
  - tile-interactive
links:
  showReportAnIssue: true
  viewSource: components/tile-interactive
---
