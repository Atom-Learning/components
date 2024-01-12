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


      `Stack` is a single axis layout component enabling you to space items evenly within it using the `gap` prop and change the direction of content with `direction`. 


      ## Direction


      `direction="row | column"`


      <CodeBlock live={true} preview={true} code={`<Stack direction="column">
        <Box css={{ bg: '$primary800', size: '$5' }} />
        <Box css={{ bg: '$primary800', size: '$5' }} />
        <Box css={{ bg: '$primary800', size: '$5' }} />
      </Stack>`} language={"tsx"} />


      ## Gap


      `gap={0 | 1 | 2 | ... | 9}`


      <CodeBlock live={true} preview={true} code={`<Stack gap={2}>
        <Box css={{ bg: '$primary800', size: '$5' }} />
        <Box css={{ bg: '$primary800', size: '$5' }} />
        <Box css={{ bg: '$primary800', size: '$5' }} />
      </Stack>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Stack" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: tKQnGF8FhsL94aVjb2Kbx
nestedSlug:
  - components
  - stack
---
