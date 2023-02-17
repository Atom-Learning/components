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


      <CodeBlock live={true} preview={true} code={`<Button>Hello world</Button>`} language={"tsx"} />


      ## Themes


      These are the available `themes` for the `Button` component: `primary` (default), `secondary`, `success`, `warning`, `danger`, and `neutral`.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3} css={{background: '$tonal200', p: '$1'}}>
        <Button>Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="success">Success</Button>
        <Button theme="warning">Warning</Button>
        <Button theme="danger">Danger</Button>
        <Button theme="neutral">Neutral</Button>
      </Stack>`} language={"tsx"} />


      ## Appearance


      There are two options for the `appearance` property: `solid` and `outline`. There are the available `outline` variations for the `primary`, `secondary` and `neutral` themes.


      <CodeBlock live={true} preview={true} code={`<Button appearance="outline">Primary</Button>`} language={"tsx"} />


      ## Disabled state


      Each variation has an `disabled` stated, by setting the `disabled` property.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3} css={{background: '$tonal200', p: '$1'}}>
        <Button disabled>Basic</Button>
        <Button theme="success" disabled>
          Themed
        </Button>
        <Button appearance="outline" disabled>Outlined</Button>
      </Stack>`} language={"tsx"} />


      ## Loading state


      When using a button to request data or fire an action that has a potential delay, including a loading state to the button can be a useful indicator that stuff is happening. The `isLoading` prop must be a boolean value to activate the loading state.


      <CodeBlock live={true} preview={true} code={`<Button isLoading> Hello world</Button>`} language={"tsx"} />


      ## Polymorphism


      The `Button` component supports polymorphism, therefore depending on whether it receives an `onClick`/`href` as a prop, it will produce a `button` or `link` respectively


      <CodeBlock live={true} preview={true} code={`<Button href="http://example.com/">I'm a link</Button>`} language={"tsx"} />


      <CodeBlock live={true} preview={true} code={`<Button onClick={() => alert('clicked')}>I'm a button</Button>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Button" />
parent: 95SvEwV7BznSChttFanpW
uuid: eeAXjJecBw5lp1uQooPiG
nestedSlug:
  - components
  - navigation
  - button
---
