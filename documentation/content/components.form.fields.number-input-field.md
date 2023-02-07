---
slug: number-input-field
title: Number Input Field
links:
  viewSource: components/number-input-field
  showReportAnIssue: true
tabs:
  - content: >-
      `NumberInputField` renders a field composed of an NumberInput, a Label
      and a InlineMessage. It is the preferred way to render a form field for a
      number input.


      In addition to text `Label` (required) and a validation error (optional), `NumberInputField` accepts all the same props as `NumberInput` and will pass them on to the `NumberInput` it renders.


      <CodeBlock live={true} preview={true} code={`<Form>
        <NumberInputField
          label="Number of cats"
          name="cats"
          min={3}
          validation={{
            min: {
              value: 3,
              message: 'You must have at least 3 cats!'
            }
          }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="NumberInputField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - number-input-field
---
