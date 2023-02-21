---
slug: tooltip
title: Tooltip
links:
  viewSource: components/tooltip
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      A component that displays information related to an element when the
      element receives keyboard focus or the mouse hovers over it


      `Tooltip` exports 4 components that combine to create our tooltip. The `Tooltip.Trigger` requires a React component child (or passed to `as`) to allow the necessary event bindings and accessible properties to be cloned.


      Also, note that the component must accept a `ref`.


      `Tooltip.Provider` is **required to avoid regressions** and should be included at the root level of the application.


      Read more about the underlying UI component on the [Radix UI documentation site](https://radix-ui.com/primitives/docs/components/tooltip).


      <CodeBlock live={true} preview={true} code={`<Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger>
            <Text>Hover on me</Text>
          </Tooltip.Trigger>
          <Tooltip.Content>This is the tooltip content, hello</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Tooltip" />

      <ComponentProps component="Tooltip.Trigger" />

      <ComponentProps component="Tooltip.Content" />

      <ComponentProps component="Tooltip.Provider" />

      <ComponentProps component="Tooltip.Portal" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - tooltip
---
