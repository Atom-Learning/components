---
slug: search-field
title: Search Field
links:
  viewSource: components/search-field
  showReportAnIssue: true
tabs:
  - content: >-
      **Related components**


      [Search input](https://atomlearning.design/components/form/primitives/search-input)


      <br/>


      `SearchField` renders a field composed of an SearchInput, a Label and a InlineMessage. It is the preferred way to render a form field for search inputs.


      In addition to text `Label` (required) and a validation error (optional), `SearchField` accepts all the same props as `SearchInput` and will pass them on to the `SearchInput` it renders. However, as with all our composed components, `SearchField`’s `css` prop will be applied to a containing `Box`—the styling of the individual components inside `SearchField` cannot be altered.


      Err on the side of using consistent form fields, but if you really need something with different styling then consider composing your own field from the `SearchInput`, `Label` and `InlineMessage` components.


      <CodeBlock live={true} preview={true} code={`<Form>
        <SearchField
          name="Email address"
          label="Email address"
          placeholder="your.name@example.com"
          type="email"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="SearchField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - search-field
---
