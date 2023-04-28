---
slug: checkbox-field
title: Checkbox Field
links:
  viewSource: components/checkbox-field
  showReportAnIssue: true
tabs:
  - content: >-
      `CheckboxField` renders a `Checkbox` inside an `InlineFieldWrapper`,
      providing a consistent layout for a checkbox, label and, when applicable,
      an error.


      <CodeBlock live={true} preview={true} code={`<Form>
        <CheckboxField label="Do you like checkboxes?" name="likeCheckboxes" />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="CheckboxField" />
    title: Code
  - title: Usage
    content: >-
      ## Overview


      An input control that enables the user to select or deselect a value, usually within a set of predefined options.


      ![checkbox overview](/assets/images/01-checkbox-overview.png "checkbox overview")


      ## When to use


      Primarly for use in forms, checkbox are used when the user may select any number of choices, including zero, one, or several.


      Used when the selected settings do not have immediate effect, these require confirmation.


      **Behavior**\

      Each checkbox can be toogled on and off by clicking, tapping in touchscreen devices, or by keyboard through tabbing and pressing the ‘Enter’ key, on either the box area or its label.


      Checkboxes can be used singularly, like a switch, or in groups. Each checkbox is independent of all other checkboxes, so checking one box doesn't uncheck the others.


      Switches are different from checkboxes because they will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.


      In most cases the checkboxes are blank by default, so users must actively click to activate it.


      **Grouping**\

      When checkboxes are presented in a group in a form, there should be at least a global label if no other description is present, stablishing the relation between the elements in a simple brief manner with no more than 2 or 3 words.


      ![checkbox when to use](/assets/images/02-checkbox-when-to-use.png "checkbox when to use")


      ## Do's and Don'ts


      ![checkbox do's and dont's 1](/assets/images/03-checkbox-do-s-and-dont-s.png "checkbox do's and dont's 1")


      ![checkbox do's and dont's 2](/assets/images/04-checkbox-do-s-and-dont-s.png "checkbox do's and dont's 2")


      ![checkbox do's and dont's 3](/assets/images/05-checkbox-do-s-and-dont-s.png "checkbox do's and dont's 3")


      ![checkbox do's and dont's 4](/assets/images/06-checkbox-do-s-and-dont-s.png "checkbox do's and dont's 4")


      ![checkbox do's and dont's 5](/assets/images/07-checkbox-do-s-and-dont-s.png "checkbox do's and dont's 5")
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - checkbox-field
---
