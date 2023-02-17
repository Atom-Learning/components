---
slug: date-field
title: Date Field
links:
  viewSource: components/date-field
  showReportAnIssue: true
tabs:
  - content: >-
      DateField renders a field composed of an DateInput, a Label and a
      InlineMessage. It is the preferred way to render a form field for dates.


      In addition to text `Label` (required) and a validation error (optional), `DateField` accepts all the same props as `DateInput` and will pass them on to the `DateInput` it renders. However, as with all our composed components, `DateField`’s `css` prop will be applied to a containing `Box`—the styling of the individual components inside `DateField` cannot be altered.


      Err on the side of using consistent form fields, but if you really need something with different styling then consider composing your own field from the `DateInput`, `Label` and `InlineMessage` components.


      <CodeBlock live={true} preview={true} code={`<Form>
        <DateField name="exam-date" label="Exam date" initialDate={new Date()} />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="DateField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - date-field
---
