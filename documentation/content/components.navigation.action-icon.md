---
slug: action-icon
title: Action Icon
links:
  showReportAnIssue: true
  viewSource: components/action-icon
tabs:
  - title: Code
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


      ## Tooltip


      The `ActionIcon` shows a tooltip by default. If the tooltip needs to be turned off it can by passing `hasTooltip=false`. It is not advisable to turn off the tooltip option as it may reduce the user experience.


      ## API Reference


      <ComponentProps component="ActionIcon" />
  - title: Usage
    content: >-
      ## Overview


      An action icon is a clickable element that is used to trigger an action by the user. It works as a more minimal version of a button that uses only an icon to signify its meaning, which can be useful when space in a layout is limited.\

      \

      Action icons are used to display common patterns that are self-explanatory and do not require extra copy to clarify.




      ![Action icon overview](/assets/images/01-action-icon-overview.png "Action icon overview")


      Action icon used to edit an ite


      ## When to use


      Use action icons only for common patterns and generic actions that can be easily understood by users without the need of button copy, tooltips or other explanations. For example, that could be editing, downloading or sharing an item within a table where it’s clear what the item is and what the action would lead to.\

      \

      If the action of the component isn’t clear enough on its own, consider using a normal button with copy.\

      \

      Action icons can be used either on their own, or in combinations with other buttons when the interaction they signify is of lower priority, compared to the primary button.


      #### Use of Tooltips


      Each action icon has a tooltip enabled by default, which is available on hover. The tooltip can clarify the action the component would take, but should not be necessary to its understanding, as hover states are not available on all devices.


      ![Action icon when to use](/assets/images/02-action-icon-when-to-use.png "Action icon when to use")


      Action icon with a tooltip


      ## Types of action icons


      Action icons have several different variations in terms of appearance, shape and theme in order to match the buttons used next to them.


      #### By appearance


      Action icons have three variants in terms of appearance, similarly to the normal buttons, which should be used based on the importance of the action within the context of the page.\

      \

      When used on its own, the action icon can use the Solid variant if it’s the primary action within that part of the layout. If it signifies a secondary action or is used in a combination with other buttons, it should use the Outline or Simple variants.


      ![Action icon solid, outline, simple](/assets/images/03-action-icon-types-of-buttons.png "Action icon solid, outline, simple")


      Action icon solid, outline, simple


      #### By shape


      Action icons can be rounded or non-rounded, depending on the styling of the other components they’re used around.


      The non-rounded variant can be used when the action icon is positioned next to a normal button or other components, while the rounded one can be used when the icon is on its own without other rectangular components nearby.


      ## Icons


      Action icons should only use icons that are a part of Atom’s design system and no other graphics or typography. The selected icons should have clear meanings and make sense in the context of the page and the other components around them.


      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/06-action-icon-do-1.png","type":"do","description":"Use an icon that follows common patterns known by users within each app"},{"image":"/assets/images/07-action-icon-dont-2.png","type":"dont","description":"Use icons that have abstract meanings within the page they’re used in"},{"image":"/assets/images/08-action-icon-do-3.png","type":"do","description":"Use the appropriate variant of the action icon that fits the component hierarchy of your layout"},{"image":"/assets/images/09-action-icon-dont-4.png","type":"dont","description":"Use the appropriate variant of the action icon that fits the component hierarchy of your layout"}]} />
uuid: j5A5xPpfwS7VeubRlEZbl
nestedSlug:
  - components
  - navigation
  - action-icon
parent: 95SvEwV7BznSChttFanpW
---
