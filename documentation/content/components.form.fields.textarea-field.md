---
slug: textarea-field
title: Textarea Field
links:
  viewSource: components/textarea-field
  showReportAnIssue: true
tabs:
  - content: >-
      TextareaField renders a field composed of a Textarea, a Label and a InlineMessage. It is the preferred way to render a form field for
      multi-line text.


      In addition to text `Label` (required) and a validation error (optional), TextareaField accepts all the same props as `Textarea` and will pass them on to the `textarea` it renders. However, as with all our composed components, `TextareaField`’s css prop will be applied to a containing Box — the styling of the individual components inside `TextareaField` cannot be altered.


      <CodeBlock live={true} preview={true} code={`<Form>
        <TextareaField
          label="Write something"
          name="example"
          id="example"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="TextareaField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - textarea-field
---
