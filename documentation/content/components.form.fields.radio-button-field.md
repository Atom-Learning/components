---
slug: radio-button-field
title: Radio Button Field
links:
  viewSource: components/radio-button-field
  showReportAnIssue: true
tabs:
  - content: >-
      `RadioButtonField` wraps a `RadioButtonGroup` to provide a legend and
      a `InlineMessage`. `RadioButtonField.Item` renders an
      individual `RadioButton` with an inline `Label`.


      **Note**: a `RadioButtonField.Item`’s `value` **must** be a `string`.


      <CodeBlock live={true} preview={true} code={`<Form>
        <RadioButtonField name="options" label="Please select an option">
          <RadioButtonField.Item label="Option 1" value="1" />
          <RadioButtonField.Item label="Option 2" value="2" />
        </RadioButtonField>
      </Form>`} language={"tsx"} />


      If you need to know when the radio group value changes, you can pass `onValueChange`, which takes a `string` type as input.


      <CodeBlock live={false} preview={false} code={`<RadioButtonField onValueChange={onChangeHandler} />`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="RadioButtonField" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - radio-button-field
---
