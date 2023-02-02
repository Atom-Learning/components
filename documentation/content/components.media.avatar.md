---
slug: avatar
title: Avatar
links:
  viewSource: components/avatar
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The `Avatar` component can be used to show a visual representation of a
      user or entity. It helps to quickly identify users or objects. An image,
      the initial of the name or a placeholder icon can be used.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <Avatar name="Alice Smith">
          <Avatar.Image
            alt="Alice Smith's avatar"
            src="https://thispersondoesnotexist.com/image"
          />
        </Avatar>
         <Avatar name="Alice Smith">
          <Avatar.Initial />
        </Avatar>
        <Avatar>
          <Avatar.Placeholder />
        </Avatar>
      </Stack>`} language={"tsx"} />


      ## Fallback behaviour


      When an image src is missing it will fallback to the initial of the name.


      <CodeBlock live={true} preview={true} code={`<Avatar name="Alice Smith">
        <Avatar.Image alt="" src="" />
      </Avatar>`} language={"tsx"} />


      When the name is also missing it will fallback to the placeholder icon.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3}>
        <Avatar name="">
          <Avatar.Image alt="Alice Smith's avatar" src="" />
        </Avatar>

        <Avatar name="">
          <Avatar.Initial />
        </Avatar>
      </Stack>`} language={"tsx"} />


      ## onClick


      An `onClick` prop can be used, this will make the component focusable using the keyboard, as it uses a `<button>` under the hood.


      <CodeBlock live={true} preview={true} code={`<Avatar name="Alice Smith" onClick={() => alert('Thanks for clicking')}>
        <Avatar.Initial />
      </Avatar>`} language={"tsx"} />


      When disabled, the onClick won't work.


      <CodeBlock live={true} preview={true} code={`<Avatar
        name="Alice Smith"
        disabled
        onClick={() => alert('This message will not appear')}
      >
        <Avatar.Initial />
      </Avatar>`} language={"tsx"} />


      ## Size


      The available `size`s for this component are: `xs`, `sm`, `md`, `lg`, `xl` and `xxl`. The default is `lg`.


      <CodeBlock live={true} preview={true} code={`  <Avatar size="xs" name="Alice Smith">
          <Avatar.Image
            alt="Alice Smith's avatar"
            src="https://thispersondoesnotexist.com/image"
          />
        </Avatar>`} language={"tsx"} />

      ## API Reference


      <ComponentProps component="Avatar" />

      <ComponentProps component="Avatar.Image" />

      <ComponentProps component="Avatar.Initial" />

      <ComponentProps component="Avatar.Placeholder" />

      <ComponentProps component="Avatar.Icon" />
parent: XPLFvowY8sBRhG2IUn5Zk
uuid: 1tFvJEHLzSO0EKyC-RGIM
nestedSlug:
  - components
  - media
  - avatar
---
