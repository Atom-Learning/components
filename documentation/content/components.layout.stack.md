---
slug: stack
title: Stack
links:
  showReportAnIssue: true
  viewSource: components/stack
tabs:
  - title: Main
    content: >-
      Stack is a layout component that provides an abstraction over the
      flexbox gap property


      `Stack` is a single axis layout component enabling you to space items evenly within it using the `gap` prop and change the direction of content with `direction`. In an ideal world this component would be redundant as `gap` would be widely supported when used with `display: flex`; unfortunately browser support [isn’t great](https://caniuse.com/flexbox-gap) with Safari being the last major browser yet to implement it. `@supports()` would usually enable us to progressively enable this property but there’s no way to test when it’s used alongside flexbox, as `gap` is also used in `display: grid`. Until we gain greater browser support, this `Stack` component should provide a similar output.


      <CodeBlock live={true} preview={true} code={`<Stack gap="2" direction="column">
        <Box css={{ bg: '$primary', size: '$5' }} />
        <Box css={{ bg: '$primary', size: '$5' }} />
        <Box css={{ bg: '$primary', size: '$5' }} />
      </Stack>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Stack" />
parent: UtnFsFtDrPgQNFrm3NcAP
uuid: tKQnGF8FhsL94aVjb2Kbx
nestedSlug:
  - components
  - layout
  - stack
---
