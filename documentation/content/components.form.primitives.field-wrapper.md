---
slug: field-wrapper
title: Field Wrapper
links:
  viewSource: components/field-wrapper
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      A utility component to help with composing consistent form fields


      `FieldWrapper` renders a `Label` and (when applicable) a `InlineMessage`. Use it to wrap any type of input to create a consistent set of form fields.


      <CodeBlock live={true} preview={true} code={`<FieldWrapper label="Example Field" fieldId="example">
        <Input name="example" id="example" />
      </FieldWrapper>`} language={"tsx"} />


      `InlineFieldWrapper` does the same but renders the label inline with the input, for example:`Checkbox`es and `Radio`s.


      <CodeBlock live={true} preview={true} code={`<InlineFieldWrapper label="Example Checkbox">
        <Checkbox name="example2" id="example2" />
      </InlineFieldWrapper>`} language={"tsx"} />


      It can also be used alongside components like `Input`, `Select` or `Switch` when you may require some condensed inline fields. You can use the `direction` and `align` props to handle how the label is positioned relative to the component, in this case the label is placed on the right with `direction="reverse"` and it's aligned centrally with the switch.


      <CodeBlock live={true} preview={true} code={`<InlineFieldWrapper direction="reverse" align="center" label="Toggle a field">
        <Switch />
      </InlineFieldWrapper>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="FieldWrapper" />


      <ComponentProps component="InlineFieldWrapper" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: 8Gr1xzA4TxMnz0TquABA3
nestedSlug:
  - components
  - form
  - primitives
  - field-wrapper
---
