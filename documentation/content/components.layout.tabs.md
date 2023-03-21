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

      Functionality based on the [`Tab`](https://www.radix-ui.com/docs/primitives/components/tabs) radix component, which already allows for: controlled/uncontrolled tabbing, disabling or partly disabling options, adds keyboard navigation and orientation and more.


      Implements experimental ColorScheme component to allow multiple colour setups.


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab2">
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


      ## Disabled


      A `Tabs.Trigger` component can take a `disabled` prop, which would make it unselectable. The corresponding `Tabs.Content` component's content will be, in this case, permanently hidden.


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab1">
        <Tabs.TriggerList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2" disabled>
            Tab 2
          </Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>Content for tab2.</Text>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## Color Scheme


      You can pass in a `colorScheme` object to the TriggerList to customise the colours of the component. Defaults to `{ base: "grey1", accent: "blue1", interactive: "hiContrast"}` ColorScheme is experimental and has been implemented only locally but you can read more about how it currently works and available options [on the repository's github](https://github.com/Atom-Learning/components/tree/main/color-scheme#readme).


      <CodeBlock live={true} preview={true} code={`<Tabs defaultValue="tab2">
        <Tabs.TriggerList
          colorScheme={{ base: 'grey1', accent: 'grey1', interactive: 'hiContrast' }}
        >
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.TriggerList>
        <Tabs.Content css={{ p: '$3' }} value="tab1">
          <Text>Content for tab1.</Text>
        </Tabs.Content>
        <Tabs.Content css={{ p: '$3' }} value="tab2">
          <Text>Content for tab2.</Text>
        </Tabs.Content>
      </Tabs>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Tabs" />


      <ComponentProps component="Tabs.TriggerList" />


      <ComponentProps component="Tabs.Trigger" />


      <ComponentProps component="Tabs.Content" />
parent: UtnFsFtDrPgQNFrm3NcAP
uuid: JNymd_5n-zALi2KcmUEtq
nestedSlug:
  - components
  - layout
  - tabs
---
