---
slug: input-field
title: Input Field
links:
  viewSource: components/input-field
  showReportAnIssue: true
tabs:
  - content: >-
      `InputField` is the preferred way to render a form field for
      single-line text and number data.


      In addition to text `Label` (required) and a validation error (optional), `InputField` accepts all the same props as `Input` and will pass them on to the `Input` it renders. However, as with all our composed components, `InputField`’s `css` prop will be applied to a containing `Box`—the styling of the individual components inside `InputField` cannot be altered.


      Err on the side of using consistent form fields, but if you really need something with different styling then consider composing your own field from the `Input`, `Label` and `InlineMessage` components.


      <CodeBlock live={true} preview={true} code={`<Form>
        <InputField
          name="Email address"
          label="Email address"
          placeholder="your.name@example.com"
          type="email"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="InputField" />
    title: Code
  - title: Usage
    content: >-
      ## Overview


      Inputs are used to ask for information from users, allowing them to enter short content and data. Inputs can be group together to create forms.


      ![Input 01](/assets/images/input-01.svg "Input 01")


      ## When to use


      Use input field to ask users for information in the form of open numbers or text.


      ![Input when to use](/assets/images/input-02.svg "Input when to use")


      ## States


      Inputs involve different states that will help users easily detect what’s expected from them. Placeholders provide examples, focus makes the selected input stand out in a form and error states easily guide the user through the step to complete in order to move on.


      ![Default state with placeholder - User hasn’t still filled in the text](/assets/images/input-03.svg "Default state with placeholder - User hasn’t still filled in the text")


      Default state with placeholder - User hasn’t still filled in the text


      ![Focus state - input is selected](/assets/images/input-04.svg "Focus state - input is selected")


      Focus state - input is selected




      ![Default state - Input is filled](/assets/images/input-05.svg "Default state - Input is filled")


      Default state - Input is filled




      ![Disabled state - User isn’t allowed to edit this input ](/assets/images/input-06.svg "Disabled state - User isn’t allowed to edit this input ")


      Disabled state - User isn’t allowed to edit this input




      ![Error state - user is trying to move forward before completing the required information](/assets/images/input-07.svg "Error state - user is trying to move forward before completing the required information")


      Error state - user is trying to move forward before completing the required information




      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/input-08-do-and-dont-01.svg","type":"do","description":"Clearly show which input isn’t allowing users to move on."},{"image":"/assets/images/input-09-do-and-dont-02.svg","description":"Show an error in the form without indicating what specific input it’s about.","type":"dont"},{"image":"/assets/images/input-10-do-and-dont-03.svg","description":"Use a clear label or an example placeholder so users can easily understand what’s being asked from them","type":"do"},{"image":"/assets/images/input-11-do-and-dont-04.svg","description":"Generic and unclear inputs","type":"avoid"},{"description":"Use clear and visible labels aligned to the left","type":"do","image":"/assets/images/input-12-do-and-dont-05.svg"},{"image":"/assets/images/input-13-do-and-dont-06.svg","description":"Provide the demanded format in the placeholder","type":"do"}]} />
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - input-field
---
