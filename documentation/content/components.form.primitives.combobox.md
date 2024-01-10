---
slug: combobox
title: Combobox
links:
  viewSource: components/combobox
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Combobox combines a text input with a list of suggested values.

      `Combobox` wraps Reach UI's `Combobox` component with default styling and accepts all the same props. See [the Reach UI docs](https://reach.tech/combobox/) for details.


      Arbitrary components can be nested inside the `Combobox.Popover` to allow for more advanced usecases, e.g. adding a new value to the list of suggestions


      Note that when combined with a `Label`, the `id` that matches the `Label`'s `htmlFor` prop should go on the `Combobox.Input`.


      <CodeBlock live={true} preview={true} code={`<Box css={{ width: '400px' }}>
        <Label css={{ mb: '$3' }} htmlFor="someid">
          What's your favourite fruit?
        </Label>
        <Combobox onSelect={console.log} openOnFocus>
          <Combobox.Input id="someid" />
          <Combobox.Popover>
            <Combobox.List>
              <Combobox.Option value="Apple" />
              <Combobox.Option value="Banana" />
              <Combobox.Option value="Cranberry" />
              <Combobox.Option value="Dragon fruit" />

              <Flex css={{ alignItems: 'center', p: '$2' }}>
                <Input size="sm" placeholder="New fruit" />
                <Button
                  size="sm"
                  css={{ ml: '$2' }}
                  onClick={() =>
                    alert('Nest other interactive UI here for advanced usecases')
                  }
                >
                  Add a new fruit
                </Button>
              </Flex>
            </Combobox.List>
          </Combobox.Popover>
        </Combobox>
      </Box>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Combobox" />


      <ComponentProps component="Combobox.Input" />


      <ComponentProps component="Combobox.Popover" />


      <ComponentProps component="Combobox.List" />


      <ComponentProps component="Combobox.Option" />


      <ComponentProps component="Combobox.OptionText" />
parent: J3bsmpB7-_uuqm05peuTA
uuid: mFC4abD3jeQzUcsYbhPtm
nestedSlug:
  - components
  - form
  - primitives
  - combobox
---
