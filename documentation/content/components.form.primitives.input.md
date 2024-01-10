---
slug: input
title: Input
links:
  viewSource: components/input
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      **Related components**


      [Input field](https://atomlearning.design/components/form/fields/input-field)


      <br/>


      Input is the lowest-level input component for text and number types.


      Inputs should be accompanied by labels, so rather than using `Input` directly in a UI, it’s normally best to use a field component, which combines an `Input` with a `Label` and displays validation errors. If none of the existing field components suit your needs, it might be worth adding a new one.


      `Input` accepts a subset of the `types` that an HTML `input` element because we have more specialised components for the others (e.g. `Checkbox`, `Radio`).


      <CodeBlock live={true} preview={true} code={`<Input placeholder="Placeholder text" css={{ width: 300 }} />`} language={"tsx"} />


      All components that use input accept three size variants- "sm" | "md" | "lg"


      <CodeBlock live={true} preview={true} code={`<Flex css={{ flexDirection: 'column' }}>
        <Input placeholder="Small variant" css={{ width: 300 }} size="sm" />
        <Input placeholder="Medium variant" css={{ width: 300, mt: '$2' }} size="md" />
        <Input placeholder="Large variant" css={{ width: 300, mt: '$2' }} size="lg" />
      </Flex>`} language={"tsx"} />


      ## Accessibility


      While `Input` accepts `"number"` for its `type` prop, this does not render `<input type="number"/>`. Instead, it renders `<input type="text" inputmode="numeric" pattern=[0-9]*/>` to tell browsers to show a numeric keyboard while avoiding the [UX and accessibility problems associated with `type="number"`](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/).


      ## API Reference


      <ComponentProps component="Input" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: y4w3HqtJPe50KidHmfbry
nestedSlug:
  - components
  - form
  - primitives
  - input
---
