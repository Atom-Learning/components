---
slug: select
title: Select
links:
  viewSource: components/select
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Select is a light wrapper around the HTML select element. It adds
      default styling and the `css` prop.


      A `Select` needs to be associated with a label for accessibility purposes, so rather than using the `Select` component directly in a UI, consider using a `SelectField`, which provides a `Label` and displays validation errors. Use this `Select` to compose more complex `Field` type components.


      <CodeBlock live={true} preview={true} code={`<Select css={{ width: 300 }}>
        <option value="apples">Apples</option>
        <option value="bananas">Bananas</option>
      </Select>`} language={"tsx"} />


      ## Accessibility


      For accessibility purposes the component needs to have the `id` prop set, to link it to the label it is associated with. If a label is not available, please add an `aria-label` to ensure that the component remains accessible


      ## Placeholder


      The component can display a placeholder without a value by passing the `placeholder` property.


      <CodeBlock live={true} preview={true} code={`<Select placeholder="Please select a fruit" css={{ width: 300 }}>
        <option value="apples">Apples</option>
        <option value="bananas">Bananas</option>
      </Select>`} language={"tsx"} />


      ## Disabled select


      The component has a `disabled` state, by setting the `disabled` property.


      <CodeBlock live={true} preview={true} code={`<Select disabled placeholder="Please select a fruit" css={{ width: 300 }}>
        <option value="apples">Apples</option>
        <option value="bananas">Bananas</option>
      </Select>`} language={"tsx"} />


      ## Disabled Option


      The component can show an option as `disabled`, by setting the `disabled` property on the option.


      <CodeBlock live={true} preview={true} code={`<Select placeholder="Please select a fruit" css={{ width: 300 }}>
        <option value="apples">Apples</option>
        <option value="bananas" disabled>
          Bananas
        </option>
      </Select>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Select" />
parent: E7irFEo7JeV-MtxTony9G
uuid: 42RS86lq4lG51PRtdQSpn
nestedSlug:
  - components
  - form
  - primitives
  - select
---
