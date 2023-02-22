---
slug: input-field
title: Input Field
links:
  viewSource: components/input-field
  showReportAnIssue: true
tabs:
  - content: >-
      `InputField` is the preferred way to render a form field for
      single-line text and number data.


      In addition to text `Label` (required) and a validation error (optional), `InputField` accepts all the same props as `Input` and will pass them on to the `Input` it renders. However, as with all our composed components, `InputField`’s `css` prop will be applied to a containing `Box`—the styling of the individual components inside `InputField` cannot be altered.


      Err on the side of using consistent form fields, but if you really need something with different styling then consider composing your own field from the `Input`, `Label` and `InlineMessage` components.


      <CodeBlock live={true} preview={true} code={`<Form>
        <InputField
          name="Email address"
          label="Email address"
          placeholder="your.name@example.com"
          type="email"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="InputField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - input-field
---
