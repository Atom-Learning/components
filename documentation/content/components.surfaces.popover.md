---
slug: popover
title: Popover
links:
  viewSource: components/popover
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Popover provides a styled actionable popup. It exports 3 components that
      combine to create our popover. The `Popover.Trigger` renders
      a `<button>` by default, but this can be overridden with
      the `asChild` prop, which will instead add all the functional and
      accessibility requirements to the child component instead (see the below
      example).


      Also, note that the component must accept a `ref`.


      Read more about the underlying UI component on the [Radix UI documentation site](https://radix-ui.com/primitives/docs/components/popover).


      <CodeBlock live={true} preview={true} code={`<Popover>
        <Popover.Trigger asChild>
          <Button>Click me</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Heading size="xs" css={{ mb: '$3' }}>
            Popover
          </Heading>
          <Text size="sm">
            The `Popover` can display any type of element as a trigger and has the
            content hidden by default
          </Text>
        </Popover.Content>
      </Popover>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Popover" />


      <ComponentProps component="Popover.Trigger" />


      <ComponentProps component="Popover.Content" />


      <ComponentProps component="Popover.Portal" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - popover
---
