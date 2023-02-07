---
slug: inline-message
title: Inline Message
links:
  viewSource: components/inline-message
  showReportAnIssue: true
tabs:
  - content: >-
      Inline messages consist of an inline feedback message in the form of
      simple text that inform the user of relevant information, revealed in
      context.


      <CodeBlock live={true} preview={true} code={`
        <InlineMessage>This is an Inline Message</InlineMessage>
      `} language={"tsx"} />

      ## Theme


      These are the available `theme`s for this component: `success`, `warning`, `error`, `neutral` and `info`. The default is `error` (due to most frequent context).


      <CodeBlock live={true} preview={true} code={`<>
        <InlineMessage theme="error">This is an error Inline Message</InlineMessage>
        <InlineMessage theme="warning">
          This is a warning Inline Message
        </InlineMessage>
        <InlineMessage theme="success">
          This is a success Inline Message
        </InlineMessage>
        <InlineMessage theme="info">This is an info Inline Message</InlineMessage>
        <InlineMessage theme="neutral">
          This is a neutral Inline Message
        </InlineMessage>
      </>`} language={"tsx"} />


      ## Size


      These are the available `size`s for this component: `xs`, `sm` and `md`. The default is `sm`


      <CodeBlock live={true} preview={true} code={`<InlineMessage size="xs">This is an xs Inline Message</InlineMessage>`} language={"tsx"} />


      ## Icon


      Each theme has a specific icon it should export, so showing or hiding an icon is simply done using the `showIcon` prop. Default is `true`.


      <CodeBlock live={true} preview={true} code={`<InlineMessage showIcon={false}>This is an Inline Message</InlineMessage>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="InlineMessage" />
    title: Main
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - inline-message
---
