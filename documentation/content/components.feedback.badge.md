---
slug: badge
title: Badge
links:
  viewSource: components/badge
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The `Badge` component can be used to highlight a short piece of
      information, like a status.


      <CodeBlock live={true} preview={true} code={`<Badge>New Data</Badge>`} language={"tsx"} />


      ## Theme


      These are the available `theme`s for this component: `success`, `warning`, `danger`, `neutral` and `info`. The default is `info`


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <Badge>Info</Badge>
        <Badge theme="neutral">Neutral</Badge>
        <Badge theme="success">Success</Badge>
        <Badge theme="warning">Warning</Badge>
        <Badge theme="danger">Danger</Badge>
      </Stack>`} language={"tsx"} />


      ## With icons


      An `<Icon />` can be passed as a child to show alongside text.


      <CodeBlock live={true} preview={true} code={`<Badge>
          <Icon is={Wifi} />
          Info with icon
          <Icon is={Wifi} />
       </Badge>`} language={"tsx"} />

      ## Size


      These are the available `size`s for this component: `xs`, `sm` and `md`. The default is `sm`


      <CodeBlock live={true} preview={true} code={`<Badge size="xs"><Icon is={Wifi} />Size</Badge>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Badge" />
parent: HGItoEG3XVs9DpOLugTot
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - feedback
  - badge
---
