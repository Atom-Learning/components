---
slug: radio-card
title: Radio Card
links:
  viewSource: components/radio-card
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      A Radio Button that enables extra emphasis and descriptive capability.


      A set of `RadioCard`s should be wrapped with a `RadioCardGroup` component to provide the correct HTML structure for our radio buttons. Any text within the card will be used as the label for the radio button, so ensure that you test this content and use `aria-hidden` to remove any unnecessary content from the announced text.


      <CodeBlock live={true} preview={true} code={`<RadioCardGroup>
        <RadioCard value="1">
          <Text css={{ mb: '$2' }}>This is a radio card option</Text>
          <Text size="sm" css={{ color: '$tonal300' }}>
            With some additional text
          </Text>
        </RadioCard>
        <RadioCard value="2">
          <Text css={{ mb: '$2' }}>This is another radio card option</Text>
          <Text size="sm" css={{ color: '$tonal300' }}>
            With some additional text
          </Text>
        </RadioCard>
        <RadioCard value="3">
          <Text css={{ mb: '$2' }}>And a further radio card option</Text>
          <Text size="sm" css={{ color: '$tonal300' }}>
            With some additional text
          </Text>
        </RadioCard>
      </RadioCardGroup>`} language={"tsx"} />


      You can pass props to `RadioCardGroup` to control the styling of every `RadioCard` within. Change the radio button alignment within the card, toggle between two sizes, and render each card at full width.


      <CodeBlock live={true} preview={true} code={`<RadioCardGroup align="right" size="lg" isFullWidth defaultValue="1">
        <RadioCard value="1">
          <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text css={{ mr: '$4' }} size="sm">
              £99
            </Text>
            <Heading size="xs">This is a radio card option</Heading>
          </Flex>
        </RadioCard>
        <RadioCard value="2">
          <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text css={{ mr: '$4' }} size="sm">
              £109
            </Text>
            <Heading size="xs">This is another radio card option</Heading>
          </Flex>
        </RadioCard>
        <RadioCard value="3">
          <Flex css={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text css={{ mr: '$4' }} size="sm">
              £149
            </Text>
            <Heading size="xs">And a further additional radio card option</Heading>
          </Flex>
        </RadioCard>
      </RadioCardGroup>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="RadioCardGroup" />


      <ComponentProps component="RadioCard" />
parent: E7irFEo7JeV-MtxTony9G
uuid: hlhPaSzso2dYs2BWOoauk
nestedSlug:
  - components
  - form
  - primitives
  - radio-card
---
