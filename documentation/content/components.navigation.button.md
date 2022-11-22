---
slug: button
title: Button
links:
  viewSource: components/button
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The Button component is a light wrapper around an HTML button element


      It adds default styling and the `css` prop. By default `primary` theme is displayed with a `solid` appearance.


      <CodeBlock live={true} preview={true} code={`

      <ColorScheme as={Button} accent="danger" interactive="hiContrast1">Hello world</ColorScheme>

      `} language={"tsx"} />


      ## Themes


      These are the available `themes` for the `Button` component: `primary` (default), `secondary`, `success`, `warning`, `danger`, and `neutral`.


      <CodeBlock live={true} preview={true} code={`

      <>
        <Button>Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="success">Success</Button>
        <Button theme="warning">Warning</Button>
        <Button theme="danger">Danger</Button>
        <Button theme="neutral">Neutral</Button>
      </>

      `} language={"tsx"} />


      ## Appearance


      There are two options for the `appearance` property: `solid` and `outline`. There are the available `outline` variations for the `primary`, `secondary` and `neutral` themes.


      <CodeBlock live={true} preview={true} code={`

      <Button appearance="outline">Primary</Button>

      `} language={"tsx"} />


      ## Disabled state


      Each variation has an `disabled` stated, by setting the `disabled` property.


      <CodeBlock live={true} preview={true} code={`

      <>
        <Button disabled>Disabled button</Button>
        <Button theme="success" disabled>
          Disabled button
        </Button>
      </>

      `} language={"tsx"} />


      ## Loading state


      When using a button to request data or fire an action that has a potential delay, including a loading state to the button can be a useful indicator that stuff is happening. The `isLoading` prop must be a boolean value to activate the loading state.


      <CodeBlock live={true} preview={true} code={`

      <Button isLoading> Hello world</Button>

      `} language={"tsx"} />


      ## Rounded Variant


      Setting `isRounded` creates a rounded button


      <CodeBlock live={true} preview={true} code={`

      <Button isRounded>Rounded Button</Button>

      `} language={"tsx"} />


      ## Polymorphism


      The `Button` component supports polymorphism, therefore depending on whether it receives an `onClick`/`href` as a prop, it will produce a `button` or `link` respectively


      <CodeBlock live={true} preview={true} code={`

      <Button href="http://example.com/">I'm a link</Button>

      `} language={"tsx"} />


      <CodeBlock live={true} preview={true} code={`

      <Button onClick={() => console.log('clicked')}>I'm a button</Button>

      `} language={"tsx"} />
parent: 95SvEwV7BznSChttFanpW
uuid: Mf5Ww7wcl_oBKbYxcKV_V
nestedSlug:
  - components
  - navigation
  - button
---
