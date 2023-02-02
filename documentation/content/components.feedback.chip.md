---
slug: chip
title: Chip
links:
  viewSource: components/chip
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      A component in the shape of a pill providing visual cues to prompt
      users to enter information or filter content.

      `Chip` itself is a primitive. It has no functional logic in itself, however, it is used to provide common styles for all the `Chip`-based components.


      <CodeBlock live={true} preview={true} code={`<Chip>
        <Chip.Content>Not the tasty kind</Chip.Content>
      </Chip>`} language={"tsx"} />


      ## Gap


      `gap={ 1 | 2 | 3}`


      We provide three options for gap space between chips. `1` will be typically used within Input fields (multiselect) or when space is limited. `2` is the default option that provides a comfortable distance for the set.


      <CodeBlock live={true} preview={true} code={`<ChipGroup gap={1}>
        <Chip>
          <Chip.Content>A</Chip.Content>
        </Chip>
        <Chip>
          <Chip.Content>B</Chip.Content>
        </Chip>
        <Chip>
          <Chip.Content>C</Chip.Content>
        </Chip>
      </ChipGroup>`} language={"tsx"} />


      ## Size


      `size="sm | md | lg"`


      <CodeBlock live={true} preview={true} code={`<ChipGroup align="center">
        <Chip size="sm">
          <Chip.Content>
            <Icon is={Upload} />A
          </Chip.Content>
        </Chip>
        <Chip size="md">
          <Chip.Content>
            <Icon is={Upload} />B
          </Chip.Content>
        </Chip>
        <Chip size="lg">
          <Chip.Content>
            <Icon is={Upload} />C
          </Chip.Content>
        </Chip>
        <Chip
          size={{
            '@initial': 'lg',
            '@md': 'md',
            '@lg': 'sm'
          }}
        >
          <Chip.Content>
            <Icon is={Upload} />C
          </Chip.Content>
        </Chip>
      </ChipGroup>`} language={"tsx"} />


      ## Icon


      When an `<Icon />` is used as an immediate child of `<Chip.Content />` we automatically transform it to a `<Chip.Icon />` which applies the correct styles and sizing to it.


      <CodeBlock live={true} preview={true} code={`<ChipGroup>
        <Chip>
          <Chip.Content>
            <Icon is={Upload} /> Icon
          </Chip.Content>
        </Chip>
        <Chip>
          <Chip.Content>
            <Chip.Icon is={Upload} /> Chip.Icon
          </Chip.Content>
        </Chip>
      </ChipGroup>`} language={"tsx"} />


      If additional nesting is needed; you can use the `<Chip.Icon />` component directly.


      <CodeBlock live={true} preview={true} code={`<ChipGroup>
        <Chip>
          <Chip.Content>
            <div>
              <Icon is={Upload} /> Icon (wrong sizing)
            </div>
          </Chip.Content>
        </Chip>
        <Chip>
          <Chip.Content>
            <div>
              <Chip.Icon is={Upload} /> Chip.Icon
            </div>
          </Chip.Content>
        </Chip>
      </ChipGroup>`} language={"tsx"} />


      ## Disabled


      <CodeBlock live={true} preview={true} code={`<Chip data-disabled>
        <Chip.Content>Not the tasty kind</Chip.Content>
      </Chip>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Chip" />


      <ComponentProps component="ChipGroup" />
parent: HGItoEG3XVs9DpOLugTot
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - feedback
  - chip
---
