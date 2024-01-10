---
slug: password-field
title: Password Field
links:
  viewSource: components/password-field
  showReportAnIssue: true
tabs:
  - content: >-
      `PasswordField` is the preferred way to render a form field for a current
      password (not necessarily for creating a new password).


      `PasswordField` accepts the same props as `InputField` but provides default values for some of them (e.g. `label` defaults to `"Password"` and `name` defaults to `password`).


      In addition to the regular `InputField` props and functionality, `PasswordField` accepts an optional `forgotPasswordURL` prop which will be used to render a link to a password reset page. It also provides the ability for the user to toggle visibility of their password.


      <CodeBlock live={true} preview={true} code={`<Form>
        <PasswordField
          name="password"
          prompt={{ link: '/forgot-password', label: 'Forgotten your password?' }}
          placeholder="Your password"
          css={{ width: 320 }}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="PasswordField" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - password-field
---
