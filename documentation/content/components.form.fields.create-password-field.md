---
slug: create-password-field
title: Create Password Field
links:
  viewSource: components/create-password-field
  showReportAnIssue: true
tabs:
  - content: >-
      `CreatePasswordField` is the preferred way to render a form field for
      creating a new password. It is built on top of the `PasswordField`.


      `CreatePasswordField` accepts the same props as `PasswordInput` but provides default values for some of them (e.g. `label` defaults to `"Create a password"` and `name` defaults to `password`).


      `CreatePasswordField` introduces a `validate` prop. `validate` can be synchronous or asynchronous, it allows you to provide a custom function to handle password validation according to your specific requirements. The `defaultValidation` prop allows you to provide an initial validation status that matches the same structure that the validate function returns. This way, you can display immediate feedback to the user while the actual validation is being processed asynchronously.


      To provide visual feedback on the validation rules, `CreatePasswordField` utilizes the `InlineMessage` component. The direction of these messages can be controlled using the `messageDirection` prop.

      <CodeBlock live={true} preview={true} code={`<Form onSubmit={console.log}>
        <CreatePasswordField
          validate={(password) => ({
            ['7+ characters']: password.length >= 7,
            ['Is not common password']: !['1234', 'password'].includes(password)
          })}
          defaultValidation={{
            ['7+ characters']: false,
            ['Is not common password']: false,
          }}
          messageDirection="column"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="CreatePasswordField" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - create-password-field
---
