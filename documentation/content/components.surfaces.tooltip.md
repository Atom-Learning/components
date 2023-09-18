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
  - title: Usage
    content: >-
      ## Overview


      The Tooltip component is a user interface element that displays additional information when the user hovers over or clicks on a specific element. Tooltips are typically used to provide users with context or additional details about an element, such as the purpose of a button or the meaning of an icon.


      ![01 tooltip overview](/assets/images/01-tooltip-usage.svg "01 tooltip overview")


      ## When to use


      Tooltips are typically used to provide additional information on a specific term or item, or to clarify a confusing element on a webpage or application. They can help to improve the user experience by providing quick access to relevant information without cluttering the main interface.


      ## Content guidelines


      * Keep the content concise and focused on the most important information.

      * Use plain language that is easy to understand.

      * Avoid technical jargon or industry-specific terms.

      * Make sure the content is accurate and up-to-date.

      * Use a consistent tone and style throughout the tooltips.


      Usage examples


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/01-tooltip-do.svg","type":"do","description":"Ensure that the tooltip's content is clear and concise."},{"description":"Overload tooltips with excessive information.","type":"dont","image":"/assets/images/02-tooltip-dont.svg"},{"description":"Choose appropriate tooltip placements that don't obstruct critical content and are contextually relevant.","type":"do","image":"/assets/images/03-tooltip-do.svg"},{"description":"Position tooltips in a way that obscures the content or makes it difficult for users to interact with the elements they're hovering over.","type":"dont","image":"/assets/images/04-tooltip-dont.svg"},{"image":"/assets/images/05-tooltip-do.svg","description":"Use tooltip if the content is cut off with an ellipsis or overflows.","type":"do"},{"description":"Use tooltips excessively. Reserve them for situations where additional context or information is genuinely needed.","type":"dont","image":"/assets/images/06-tooltip-dont.svg"}]} />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - tooltip
---
