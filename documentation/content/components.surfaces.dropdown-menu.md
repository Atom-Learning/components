---
slug: dropdown-menu
title: Dropdown Menu
links:
  viewSource: components/dropdown-menu
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      `DropdownMenu` exports many components that combine to create a
      dropdown menu. The `DropdownMenu.Trigger` renders a `<button>` by default,
      but this can be overridden with the `asChild` prop, which will instead add
      all the functional and accessibility requirements to the child component
      instead (see the below example).


      Also, note that the component must accept a `ref`.


      Read more about the underlying UI component on the [Radix UI documentation site](https://radix-ui.com/primitives/docs/components/dropdown-menu).


      <CodeBlock live={true} preview={true} code={`<DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>Click me</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={16}>
          <DropdownMenu.Item onClick={() => alert('Great clicking!')}>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.LinkItem href="/logout">Log Out</DropdownMenu.LinkItem>
        </DropdownMenu.Content>
      </DropdownMenu>`} language={"tsx"} />


      For any modifications of the default `DropdownMenu` visuals, we recommend utilising the Radix UI DropdownMenu component directly. You will need to wrap each exported component within a `styled()` function to enable the `css` prop.


      ## API Reference


      <ComponentProps component="DropdownMenu" />


      <ComponentProps component="DropdownMenu.Trigger" />


      <ComponentProps component="DropdownMenu.Content" />


      <ComponentProps component="DropdownMenu.Item" />


      <ComponentProps component="DropdownMenu.Separator" />
parent: jAvRQoZ2NuRO-VGZiJ0a0
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - surfaces
  - dropdown-menu
---
