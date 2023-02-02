---
slug: action-icon
title: Action Icon
links:
  showReportAnIssue: true
  viewSource: components/action-icon
tabs:
  - title: Main
    content: >-
      An accessible interactive wrapper around Icon. `ActionIcon` should be
      used alongside `Icon` when you require a user interaction.


      <CodeBlock live={true} preview={true} code={`<Stack>
        <ActionIcon label="Attach a file" appearance="simple">
          <Icon is={Clip} />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline">
          <Icon is={Clip} />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid">
          <Icon is={Clip} />
        </ActionIcon>
      </Stack>`} language={"tsx"} />


      ## Rounded Variant


      Setting `isRounded` makes the Action circular when paired with the options "outline" and "solid" for the `appearance` prop


      <CodeBlock live={true} preview={true} code={`<Stack>
        <ActionIcon label="Attach a file" appearance="outline" isRounded>
          <Icon is={Bell} />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" isRounded>
          <Icon is={Bell} />
        </ActionIcon>
      </Stack>`} language={"tsx"} />


      ## Disabled state


      Passing `disabled` makes the Action Icon take a disabled appearance, where any cursor interaction with the component will not render any changes in its UI.


      <CodeBlock live={true} preview={true} code={`<Stack>
        <ActionIcon label="Attach a file" appearance="simple" disabled>
          <Icon is={Bell} />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="outline" disabled>
          <Icon is={Bell} />
        </ActionIcon>
        <ActionIcon label="Attach a file" appearance="solid" disabled>
          <Icon is={Bell} />
        </ActionIcon>
      </Stack>`} language={"tsx"} />


      It is recommended to pair `ActionIcon` with `Tooltip` to provide a clear visual description of the action the user is about to perform.


      <CodeBlock live={true} preview={true} code={`<Tooltip>
        <Tooltip.Trigger asChild>
           <span>
            <ActionIcon size="lg" label="Add to basket">
              <Icon is={Basket} />
            </ActionIcon>
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content>Add to basket</Tooltip.Content>
      </Tooltip>`} language={"tsx"} />


      ## Polymorphism


      The `ActionIcon` component supports polymorphism, therefore depending on whether it receives an `onClick`/`href` as a prop, it will produce a `button` or `link` respectively


      <CodeBlock live={true} preview={true} code={`<Stack>
        <ActionIcon label="Shuffle selection" onClick={() => console.log('clicked')}>
          <Icon is={Shuffle} />
        </ActionIcon>


        <ActionIcon label="Add a new folder" href="/directory/add">
          <Icon is={FolderAdd} />
        </ActionIcon>
      </Stack>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="ActionIcon" />
uuid: j5A5xPpfwS7VeubRlEZbl
nestedSlug:
  - components
  - navigation
  - action-icon
parent: 95SvEwV7BznSChttFanpW
---
