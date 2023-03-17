---
slug: accordion
title: Accordion
links:
  showReportAnIssue: true
  viewSource: components/accordion
tabs:
  - title: Code
    content: >-
      Functionality based on
      the [`Accordion`](https://radix-ui.com/primitives/docs/components/accordion) radix
      component.


      Implements experimental ColorScheme component to allow multiple colour setups.


      The Accordion exports 4 components that combine to make the `Accordion`. The parent Accordion contains `Accordion.Item` components, which themselves must contain `Accordion.Trigger` and `Accordion.Content`.


      The `Accordion.Trigger` has been simplified to include a chevron icon. Generally, you would only want to render text inside the rest.


      Default styling has been applied to `Accordion.Trigger`, but `Accordion.Content` is an empty container without styling. Should only text be placed inside, it is highly advisable to apply spacing to align with the styling of the rest of the Accordion. This can be done with either the `css` property, or by placing any other components inside the `Accordion.Content`.


      <CodeBlock live={true} preview={true} code={`<Accordion type="single" defaultValue="1">
        <Accordion.Item value="1">
          <Accordion.Trigger>Accordion Header 1</Accordion.Trigger>
          <Accordion.Content css={{ p: '$3' }}>
            <Text>Accordion content 1</Text>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Accordion Header 2</Accordion.Trigger>
          <Accordion.Content css={{ p: '$3' }}>
            <Text>Accordion content 2</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>`} language={"tsx"} />


      ## Values


      Each `Accordion.Item` must have a value, which can either be used as a `defaultValue` on the Accordion, or by setting the `value` of the Accordion so it is a controlled component. If value is set, it must also contain an `onValueChange` function that sets the value to a new value.


      ## Collapsible


      Accordions can be given the property `collapsible`, which allows all items to be collapsed. Without passing this at least one item must be open.


      ## Type


      Accordions can have `type` as either `single` or `multiple`. This changes how many items can be expanded at once. The default is `single`.


      Note: if `multiple`, `value` and `defaultValue` must be in an array. Even if you want just one item to be visible initially, you must pass something like `defaultValue={['name']}`


      ## Disabled


      An `Accordion.Item` component can take a `disabled` prop, which would make it untoggleable. The corresponding `Accordion.Content` component's content will be, in this case, permanently in its original state.


      <CodeBlock live={true} preview={true} code={`<Accordion type="single" defaultValue="1">
        <Accordion.Item value="1" disabled>
          <Accordion.Trigger>Accordion Header 1</Accordion.Trigger>
          <Accordion.Content css={{ p: '$3' }}>
            <Text>Accordion content 1</Text>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Accordion Header 2</Accordion.Trigger>
          <Accordion.Content css={{ p: '$3' }}>
            <Text>Accordion content 2</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>`} language={"tsx"} />


      ## Color Scheme


      You can pass in a `colorScheme` object to the Accordion.Trigger to customise the colours of the component. Defaults to `{ accent: "slate", interactive: "loContrast1"}` ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/color-scheme#readme).


      <CodeBlock live={true} preview={true} code={`<Accordion type="single" defaultValue="1">
        <Accordion.Item value="1">
          <Accordion.Trigger
            colorScheme={{
              accent: 'blue',
              interactive: 'hiContrast2'
            }}
          >
            Accordion Header 1
          </Accordion.Trigger>
          <Accordion.Content css={{ p: '$3' }}>
            <Text>Accordion content 1</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Accordion" />


      <ComponentProps component="Accordion.Item" />


      <ComponentProps component="Accordion.Trigger" />


      <ComponentProps component="Accordion.Content" />
  - title: Usage
    content: >-
      ## Overview


      Accordions allow you to display large amounts and multiple sections of content in a small space. It typically consists of a series of headers or tags that, when clicked, expand or collapse their associated content below.


      ![Accordion anatomy](/admin/images/01-accordion-anatomy.png "Accordion anatomy")




      ## When to use


      * If you have to organize related information.

      * If you have a page with a lot of content that is less important or relevant, make it shorter.

      * If you only have a small space to display a large amount of content, such as in a mobile interface or in a side panel.


      Use the accordion component when you have content that can be organized into categories or sections and you want to present it in a way that is easy to navigate and consume. For example use the component in a form with several sections or a list of frequently asked questions.


      ![Accordion when to use](/admin/images/02-accordion-when-to-use-faqs.png "Accordion when to use")


      #### Behaviour


      The accordion component has two main states: collapsed and expanded.\

      \

      By default the first accordion will be open.




      ![Accordion behaviour](/admin/images/03-accordion-behaviour.png "Accordion behaviour")


      #### Usability guidance


      * Create a typography hierarchy between the label and the content within the panel

      * Make the entire header selectable. Allow users to click anywhere in the header area to expand or collapse the content.

      * Give interactive elements enough space. Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)




      #### Accessibility checklist


      When designing your accordion, use this list to make sure that they meet the following accessibility requirements.


      * Make sure the label and the icon are both buttons and that they both open the same thing (e.g., your label shouldn’t link you to a page, and your icon opens the accordion). One exception may be with filter accordions where the label may be part of the checkbox.

      * Is the closed state of the accordion more than 44px high? (For touch areas)

      * Make sure that the accordion works on a tabbing map.


      And, when in doubt, visit https://webaim.org/techniques/forms/controls




      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/admin/images/04-accordion-do-1.png","type":"do","description":"Accordion behaviour"},{"image":"/admin/images/05-accordion-dont-2.png","type":"dont","description":"Accordion behaviour"},{"image":"/admin/images/06-accordion-do-3.png","type":"do","description":"Use different size of  typography to differentiate between the accordion headings and the content, making it easier for users to distinguish between the two."},{"image":"/admin/images/07-accordion-avoid-4.png","type":"avoid","description":"Using other colors that are not provided with the component."}]} />
parent: UtnFsFtDrPgQNFrm3NcAP
nestedSlug:
  - components
  - layout
  - accordion
uuid: bJJP5GDKN1xkQDsdSSvCQ
---
