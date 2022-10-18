---
slug: box
title: Box
links:
  viewSource: components/box
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Box is our most fundamental layout component


      `Box` can largely be seen as an abstraction over the `div` element. It is most useful when used as a generic containing component, and when paired with `as` and `css` allows a high degree of composition and flexibility.


      `Box` falls back to rendering a `div`, but we should use it to render more sematically relevant container elements e.g. `<Box as="section">`. As an example, a card component could use `Box` to render a `section`, `header` and `footer`.


      Avoid rendering any of these elements directly in our components — `Box` has all the same flexibility, but with the addition of the powerful `css` prop and various styling utilities based on our themes.


      ## Example


      To show an example of the benefits of using `Box`, the card below is composed together using `Box` alongside other relevant components:


      <CodeBlock live={true} preview={true} code={`<Box
        as="article"
        css={{
          border: '1px solid $tonal100',
          borderRadius: '$1',
          overflow: 'hidden',
          width: '320px'
        }}
      >
        <Box as="figure" css={{ m: 0, position: 'relative' }}>
          <Image src="http://placekitten.com/320/200" alt="Cats having a nice time" />
          <Text
            as="figcaption"
            size="sm"
            css={{
              bottom: '$3',
              color: 'white',
              position: 'absolute',
              right: '$3'
            }}
          >
            Here is a cute cat
          </Text>
        </Box>
        <Stack gap="4" css={{ px: '$3', py: '$4' }}>
          <Heading as="h2" size="sm">
            Cat
          </Heading>
          <Text>
            The cat (Felis catus) is a domestic species of small carnivorous mammal.
          </Text>
        </Stack>
      </Box>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Box" />
parent: UtnFsFtDrPgQNFrm3NcAP
uuid: LSX_efYT0S3yg7MTDiGL2
nestedSlug:
  - components
  - layout
  - box
---
