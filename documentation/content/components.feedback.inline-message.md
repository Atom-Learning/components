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
    title: Code
  - title: Usage
    content: >-
      # \[ ✍️ Work in progress ]


      ## Overview


      Inline messages consist of an inline feedback message in the form of simple text that inform the user of relevant information, revealed in context.


      • Inline Messages are the best way to communicate alerts or help in context, without blocking any other part of the interface.\

      • They draw user’s attention to specific elements without disrupting the flow of the using the app.


      ![inline message success example](/admin/images/inline-message.png "inline message success example")


      ## When to use


      Inline messages are useful when space is limited and they are less prominent and can use or not color and icons, all depending on the context and the message you are communicating.\

      Inline messages are always displayed inline, inside or next to another UI component and can use motion (ease in/out) to grab user’s attention when they appear and disappear.


      There's the option to add a [Tooltip](https://atomlearning.design/components/surfaces/tooltip) for extended information. The user can click/hover the title of the alert to read more details of the message.


      ### Examples


      **Empty state:** when data is absent or unavailable.\

      E.g. It is a way of communicating that an item’s content cannot be shown because there is no data or results available and should be designed to prevent user confusion. It’s usually displayed together with a empty state illustration.


      ![Inline message example on an empty state](/admin/images/empty-state.png "Inline message example on an empty state")


      **Information messages**: may offer additional assistance or information to let the user know why we are asking for particular information.
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - inline-message
---
