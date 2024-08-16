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
        <DropdownMenu.TypeaheadTrigger asChild>
          <Button>Click me</Button>
        </DropdownMenu.TypeaheadTrigger>
        <DropdownMenu.ChipDismissibleGroup />
        <DropdownMenu.Content sideOffset={16}>
          <DropdownMenu.Group>
            <DropdownMenu.Label>Item Group Header</DropdownMenu.Label>
            <DropdownMenu.Item>My profile  <DropdownMenu.ItemShortcut>Cmd+C</DropdownMenu.ItemShortcut></DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Group>
            <DropdownMenu.Label>Link Item Group Header</DropdownMenu.Label>
            <DropdownMenu.LinkItem href="/logout">My profile  <DropdownMenu.ItemShortcut>Cmd+C</DropdownMenu.ItemShortcut></DropdownMenu.Item>
            <DropdownMenu.LinkItem href="/logout">Item 2</DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Label>Checkbox Group Header</DropdownMenu.Label>
            <DropdownMenu.CheckboxItem name="bob" value="1">Option 1 <DropdownMenu.ItemShortcut>Cmd+C</DropdownMenu.ItemShortcut></DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem name="bob" value="2">Option 2</DropdownMenu.CheckboxItem>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Label>CheckboxCheckbox Group Header</DropdownMenu.Label>
            <DropdownMenu.CheckboxCheckboxItem name="alice" value="1a">Option 1 <DropdownMenu.ItemShortcut>Cmd+C</DropdownMenu.ItemShortcut></DropdownMenu.CheckboxCheckboxItem>
            <DropdownMenu.CheckboxCheckboxItem name="alice" value="2a">Option 2</DropdownMenu.CheckboxCheckboxItem>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Label>Radio Group Header</DropdownMenu.Label>
            <DropdownMenu.RadioGroup name="charlie">
              <DropdownMenu.RadioItem value="1">RadioItem 1</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="2">RadioItem 2</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.ButtonItem>Log Out</DropdownMenu.ButtonItem>
        </DropdownMenu.Content>
      </DropdownMenu>`} language={"tsx"} />

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
parent: J3bsmpB7-_uuqm05peuTA
uuid: _pSBDRT9MHelOD0qIL5yq
nestedSlug:
  - components
  - dropdown-menu
---
