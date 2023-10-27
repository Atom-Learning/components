---
slug: number-input
title: Number Input
links:
  viewSource: components/number-input
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      **Related components**


      [Number input field](https://atomlearning.design/components/form/fields/number-input-field)


      <br/>


      `NumberInput` wraps `Input` set to a numeric value, along with two `ActionIcon` buttons for decrementing and incrementing the value.


      <CodeBlock live={true} preview={true} code={`<NumberInput name="age" />`} language={"tsx"} />


      When min or max values are set, the corresponding decrement or increment button will become disabled when the min/max values are reached. By default, min is set to 0.


      A tooltip will display on hover of a disabled button, providing information on why the button is disabled. To override the default tooltip content, pass in a `disabledTooltipContent` object.


      Note: A `<ToolTipProvider />` must be rendered at the root of the app for this to work.


      <CodeBlock live={true} preview={true} code={`<NumberInput
        name="age"
        max={11}
        disabledTooltipContent={{ increment: 'Ages over 11 are not allowed' }}
      />`} language={"tsx"} />


      ## Keyboard interactions


      A negative `tabindex` has been added to the increment and decrement buttons to remove them from the default tabbing order. Instead, users can use the below keys to interact with the component.


      * When you hit the ⬆️ or ➡️ key, the input value will be increased by step.

      * When you hit the ⬅️ or ⬇️ key, the input value will be decreased by step.

      * When you hit the Home button, the value will jump to the min value.

      * When you hit the End button, the value will jump to the max value.


      See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role#keyboard_interactions) for more information on accessibility.


      ## API Reference


      <ComponentProps component="NumberInput" />
parent: E7irFEo7JeV-MtxTony9G
uuid: 3CtQsGQfWEO-KC6VMWb10
nestedSlug:
  - components
  - form
  - primitives
  - number-input
---
