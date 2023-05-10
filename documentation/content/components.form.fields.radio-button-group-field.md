---
slug: radio-button-group-field
title: Radio Button Field
links:
  viewSource: components/radio-button-group-field
  showReportAnIssue: true
tabs:
  - content: >-
      `RadioButtonGroupField` wraps a `RadioButtonGroup` to provide a legend
      and a `InlineMessage`. `RadioButtonGroupField.Item` renders an
      individual item with an inline `Label`.


      **Note**: a `RadioButtonGroupField.Item`’s `value` **must** be a `string`.


      <CodeBlock live={true} preview={true} code={`<Form>
        <RadioButtonGroupField name="options" label="Please select an option">
          <RadioButtonGroupField.Item label="Option 1" value="1" />
          <RadioButtonGroupField.Item label="Option 2" value="2" />
        </RadioButtonGroupField>
      </Form>`} language={"tsx"} />


      If you need to know when the radio group value changes, you can pass `onValueChange`, which takes a `string` type as input.


      <CodeBlock live={false} preview={false} code={`<RadioButtonGroupField onValueChange={onChangeHandler} />`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="RadioButtonGroupField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - radio-button-group-field
---
