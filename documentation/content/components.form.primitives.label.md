---
slug: label
title: Label
links:
  viewSource: components/label
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Label is a light wrapper around the basic HTML label element.

      Labels are associated with controls like `input` or `checkbox`, however before using this component consider using one of the provided `Field` components that are available. Use this `Label` to compose more complex `Field` type components.


      ## Accessibility


      For accessibility purposes the component needs either to have the `htmlFor` prop set to link it to the control it is associated with or to wrap around the component that it is labelling.


      ## Sizes


      <CodeBlock live={true} preview={true} code={`<Label size="sm">A small label</Label>`} language={"tsx"} />


      ## Required


      To denote a required field, the `required` prop will add an `*` suffix to the label text.



      <CodeBlock live={true} preview={true} code={`<Label required>A normal label</Label>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Label" />
parent: E7irFEo7JeV-MtxTony9G
uuid: g0eB4TgWpO2blk0Bq-dju
nestedSlug:
  - components
  - form
  - primitives
  - label
---
