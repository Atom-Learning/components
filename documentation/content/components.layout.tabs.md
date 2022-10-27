---
slug: tabs
title: Tabs
links:
  viewSource: components/tabs
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Tabs is a component that provides different sections of content that
      are displayed one at a time.


      The component provides a set of default styles, which can be overwritten by using the `css` prop. It is composed by combining smaller components, such as `Tabs.TriggerList`, `Tabs.Trigger`, and `Tabs.Content`.


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab1">
        <Tabs.TriggerList>
          <Tabs.Trigger value="tab1">
            Nested component under the Tabs.Trigger component
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2">Simple text</Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>
            Content for the second tab. It can also hold other components, like a
          </Text>
          <Button>Button</Button>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      It takes a `defaultValue` prop that should match one of the triggers' `value` prop.


      ```

      <Tabs defaultValue="tab1">

      ```


      It also takes a `theme` prop that should either be "light" or "dark".


      ```

      <Tabs theme="light"></Tabs>

      <Tabs theme="dark"></Tabs>

      ```


      ## Tabs.TriggerList


      The `Tabs.TriggerList` component simply holds the individual `Tabs.Trigger` components. It can also get custom styling via the `css` prop. `Tabs.TriggerList` will automatically show `<` & `>` buttons in case the content is overshooting the available space.


      The default scroll amount for the scroll buttons on the `Tabs.TriggerList` is 10% of the content width. You can set this to any percentage by setting, for example, `scrollPercentage={25}`.


      ## Tabs.Trigger


      The `Tabs.Trigger` component holds the content that will be displayed inside the button that the user would click in order to switch tabs. In can hold either a string, or some other component. It needs to be passed a `value` prop, that would be identical to the `value` prop passed to its corresponding `Tabs.Content` component.


      ## Tabs.Content


      The `Tabs.Content` component, as the name suggests, holds the content for that particular section of the tabs component. It takes a `value` prop that needs to match the `value` prop passed to its corresponding trigger. Its content can be any text or valid component.


      ## Disabled tab


      A `Tabs.Trigger` component can take a `disabled` prop, which would make it unselectable. The corresponding `Tabs.Content` component's content will be, in this case, permanently hidden.


      <CodeBlock live={true} preview={true} code={`<Tabs>
        <Tabs.TriggerList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger disabled value="tab2">
            Tab 2
          </Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for the second tab.</Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## Styling the `Tabs.TriggerList`


      The trigger list accepts an appearance property to apply uppercase to all tabs. Simply pass `appearance='uppercase'`.


      <CodeBlock live={true} preview={true} code={`<Tabs>
        <Tabs.TriggerList appearance="uppercase">
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for the second tab.</Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Tabs" />


      <ComponentProps component="TabsTriggerList" />


      <ComponentProps component="TabsTrigger" />


      <ComponentProps component="TabsContent" />
parent: UtnFsFtDrPgQNFrm3NcAP
uuid: JNymd_5n-zALi2KcmUEtq
nestedSlug:
  - components
  - layout
  - tabs
---
