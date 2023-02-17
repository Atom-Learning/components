---
slug: dialog
title: Dialog
links:
  viewSource: components/dialog
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The Dialog component renders its children inside a modal and puts a
      dimmer over the rest of the screen.


      `Dialog` exports many components that combine to create a modal. The `Dialog.Trigger` renders a `<button>` by default, but this can be overridden with the `asChild` prop, which will instead add all the functional and accessibility requirements to the child component instead (see the below example).


      Also, note that the component must accept a `ref`.


      Read more about the underlying UI component on the [Radix UI documentation site](https://radix-ui.com/primitives/docs/components/dialog).


      <CodeBlock live={true} preview={true} code={`<Dialog>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Heading size="sm" css={{ mb: '$3' }}>
            Dialog
          </Heading>
          <Text size="sm" css={{ mb: '$3' }}>
            The \`Dialog\` can display any type of element as a trigger and has the
            content hidden by default
          </Text>
          <Button appearance="outline" size="sm" as={Dialog.Close}>
            Close Dialog
          </Button>
        </Dialog.Content>
      </Dialog>`} language={"tsx"} />


      `Dialog` may be rendered without a close button. It's important to note that in case the default close button is hidden, one would need to provide an action button explicitly, to close the dialog.


      <CodeBlock live={true} preview={true} code={`<Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content showCloseButton={false}>
          <Text>
            Dialog.Close is used below to retain the correct accessible roles and
            related logic
          </Text>
          <Button as={Dialog.Close}>Close</Button>
        </Dialog.Content>
      </Dialog>`} language={"tsx"} />


      `Dialog` can also be rendered with a custom background. Important to note that `Dialog.Background` needs to be a child of `Dialog.Content`


      <CodeBlock live={true} preview={true} code={`<Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Background>
            <Text>
              Custom Background Content
            </Text>
          </Dialog.Background>
          <Text>
            Dialog.Background will appear above the Overlay, but below the DialogContent
          </Text>
          <Button as={Dialog.Close}>Close</Button>
        </Dialog.Content>
      </Dialog>`} language={"tsx"} />


      For any modifications of the default `Dialog` visuals, for example bypassing the panel design entirely, we recommend utilising the Radix UI Dialog component directly. You will need to wrap each exported component within a `styled()` function to enable `css` and `as`, and compose together `Dialog.Overlay` and `Dialog.Close` within `Dialog.Content` to mimic the behaviour of this modal.


      ## API Reference


      <ComponentProps component="Dialog" />


      <ComponentProps component="Dialog.Content" />


      <ComponentProps component="Dialog.Close" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - dialog
---
