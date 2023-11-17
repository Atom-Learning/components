---
slug: checkbox-field
title: Checkbox Field
links:
  viewSource: components/checkbox-field
  showReportAnIssue: true
tabs:
  - content: >-
      **Related components**


      [Checkbox](https://atomlearning.design/components/form/primitives/checkbox)


      <br/>


      `CheckboxField` renders a `Checkbox` inside an `InlineFieldWrapper`, providing a consistent layout for a checkbox, label and, when applicable, an error.


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


      <DosAndDonts items={[{"image":"/assets/images/checkbox-dos-and-donts-01.svg","type":"do","description":"In groups, allow users to select more than one choice. "},{"image":"/assets/images/checkbox-dos-and-donts-02.svg","type":"dont","description":"Use for mutually exclusive options, in that case use a radio button instead."},{"image":"/assets/images/checkbox-dos-and-donts-03.svg","type":"do","description":"Label should be short, descriptive, and possitive. Users should know what will happen if they check a particular box, and what will happen if not."},{"image":"/assets/images/checkbox-dos-and-donts-04.svg","type":"dont","description":"Use negative wording that may confuse the user. If you need to do this is better to have two radio buttons with each of the two cases."},{"image":"/assets/images/checkbox-dos-and-donts-05.svg","type":"do","description":"Start labels with a capital letter"},{"image":"/assets/images/checkbox-dos-and-donts-06.svg","type":"dont","description":"Include punctuation after checkbox labels"},{"image":"/assets/images/checkbox-dos-and-donts-07.svg","type":"do","description":"Leave the checkboxes blank by default, so users must actively click to activate it."},{"image":"/assets/images/checkbox-dos-and-donts-08.svg","type":"dont","description":"Use the selection of a check box to perform commands or display other windows"},{"image":"/assets/images/checkbox-dos-and-donts-09.svg","type":"do","description":"Include both the box and label in the selection target so users have larger target area to interact with."}]} />
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - checkbox-field
---
