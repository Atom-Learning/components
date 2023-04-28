---
slug: switch
title: Switch
links:
  viewSource: components/switch
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      The `Switch` component implements [Radix's Switch
      component](https://radix-ui.com/primitives/docs/components/switch).


      Switches are used to toggle application state between two mutually exlusive values. The `Switch` defaults to the "off" state unless it's rendered with the `defaultChecked` prop.


      The `Switch` component should not be used to collect form data — use checkboxes or radio buttons for that. Only use `Switch` inside a form if it is serving its primary purpose of toggling some state with immediate effect (e.g. to conditionally render a section of the form).


      <CodeBlock live={true} preview={true} code={`<Switch />`} language={"tsx"} />


      ## Disabled state


      The `disabled` stated can be set using the `disabled` property.


      <CodeBlock live={true} preview={true} code={`<Switch disabled />`} language={"tsx"} />


      ## Accessibility


      Adheres to the `switch` [role requirements](https://www.w3.org/TR/wai-aria-1.2/#switch)


      ## API Reference


      <ComponentProps component="Switch" />
  - title: Usage
    content: >-
      ## Overview


      Switch is an UI component that allows users to switch between two states or options.\

      In some cases, the switch may also have an indicator that displays the current state or a label to help users understand the purpose of the switch.\

      \

      The switch component is often used in settings where users need to turn on or off a feature or enable/disable a setting.\

      \

      Additionally, users with visual impairments or motor disabilities may have difficulty using the switch component, so we should ensure that there are alternative methods of toggling between states, such as using keyboard shortcuts or voice commands.


      #### Overflow


      Chips Toggle are typically displayed horizontally under the title or next to it. More than one row of chips can wrap to the next row.


      ![](blob:https://atomlearning.design/3e5680ad-41f0-474f-9e4e-f1c713456859)


      ## When to use


      Use switches when you want to immediately activate or deactivate something. Often used in forms, in condensed spaces, or inline with other components or content, for instance in data tables.\

      Switches without label (standalone) should be used sparingly in situations where the context is clear without an associated text label.


      ![02 switch when to use](/assets/images/02-switch-when-to-use.svg "02 switch when to use")


      Standalone switch used to activate specific function


      ![03 Switch settings](/assets/images/03-switch-settings.svg "03 Switch settings")


      Switches used to turn on specific settings


      ![04 Switch table cell](/assets/images/04-switch-table-cell.svg "04 Switch table cell")


      Switch inline with other components or content, in data table




      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/switch-01-do.svg","type":"do","description":"Switches are best for instant activation or deactivation."},{"image":"/assets/images/switch-02-dont.svg","type":"dont","description":"Communicate selection (for that purpose checkbox will be better choice)."},{"image":"/assets/images/switch-03-do.svg","type":"do","description":"Use labels if the context is not clear."},{"image":"/assets/images/switch-04-dont.svg","type":"dont","description":"Use verb phrases related to activity states in a switch label. A switch is naturally either in a state of being on or off, so repeating in the label that something is “on” or “off” is redundant and clutters an interface."},{"image":"/assets/images/switch-05-do.svg","type":"do","description":"Use sentence case."},{"image":"/assets/images/switch-06-dont.svg","type":"dont","description":"Use title case. Labels for switches should be written in sentence case unless they contain words that are branded terms."},{"image":"/assets/images/switch-07-do.svg","type":"do","description":"Use switches to quickly activate needed functions."},{"image":"/assets/images/switch-08-avoid.svg","type":"avoid","description":"Using negative tone for labels."}]} />
parent: E7irFEo7JeV-MtxTony9G
uuid: 9JrOEIMhJCc71cFGiLg2J
nestedSlug:
  - components
  - form
  - primitives
  - switch
---
