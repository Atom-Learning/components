---
slug: phone-number-field
title: Phone Number Field
links:
  viewSource: components/date-field
  showReportAnIssue: true
tabs:
  - content: >-
      **Related components**


      [Phone number input](/components/phone-number-input)


      <br/>


      PhoneNumberField renders a field composed of an PhoneNumberInput, a Label and a InlineMessage. It is the preferred way to render a form field for phone numbers.


      `PhoneNumberField` props are a combination of the usual `FieldWrapper` props (`name`, `label`, `hideLabel`, `description` etc.), all the props from `PhoneNumberInput` which is passes down, as well as a copy prop to set an appropriately translated error message for invalid phone numbers like so `{copy: {validation_invalid_phone_number: 'Your error message' }}`



      <CodeBlock live={true} preview={true} code={`<Form onSubmit={(formData)=>console.log(formData)}>
        <PhoneNumberField name="phone-number" label="Phone number" defaultValue='020 4586 7744' />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="PhoneNumberField" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: MD1abrf40ecDo4z16-bco
nestedSlug:
  - components
  - phone-number-field
---
