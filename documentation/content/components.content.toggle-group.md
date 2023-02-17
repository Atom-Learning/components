---
slug: toggle-group
title: Toggle Group
links:
  viewSource: components/text
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Lets users toggle between a group of limited options(Suggested range is
      2-6 options).


      Functionality based on the [`ToggleGroup`](https://www.radix-ui.com/docs/primitives/components/toggle-group) radix component, which already allows for: single/multiple select, disabling or partly disabling options, adds keyboard navigation and orientation and more.


      Extends visually by allowing for different sizing, vertical/horizontal display and gaps using the Stack component. When there is no gap, rounds the border for *only* the edge/outer corners.


      ## Orientation


      `orientation="vertical | horizontal"`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" orientation="vertical">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Gap


      `gap={0 | 1 | 2 | ... | 9}`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="single" gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Size


      `size="sm | md | lg"`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="single" gap={3}>
        <ToggleGroup.Button value="a" size="sm">
          <Icon is={Upload} /> A
        </ToggleGroup.Button>
        <ToggleGroup.Button value="b" size="sm">
          B
        </ToggleGroup.Button>
        <ToggleGroup.Button value="icon" size="sm">
          <Icon is={Upload} />
        </ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Full width


      `isFullWidth={boolean}`


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" isFullWidth gap={3}>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ## Disabled


      ### Partly


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" gap={3} defaultValue="a">
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c" disabled>
          C
        </ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ### Fully


      <CodeBlock live={true} preview={true} code={`<ToggleGroup.Root type="multiple" gap={3} defaultValue="a" disabled>
        <ToggleGroup.Button value="a">A</ToggleGroup.Button>
        <ToggleGroup.Button value="b">B</ToggleGroup.Button>
        <ToggleGroup.Button value="c">C</ToggleGroup.Button>
      </ToggleGroup.Root>`} language={"tsx"} />


      ### API Reference


      <ComponentProps component="ToggleGroup.Root" />

      <ComponentProps component="ToggleGroup.Button" />

      <ComponentProps component="ToggleGroup.Item" />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: owSewZQY17sWMc7HPp134
nestedSlug:
  - components
  - content
  - toggle-group
---
