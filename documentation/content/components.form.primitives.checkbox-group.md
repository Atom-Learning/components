---
slug: checkbox-group
title: Checkbox Group
links:
  showReportAnIssue: true
  viewSource: components/checkbox-group
tabs:
  - title: Code
    content: >-
      `CheckboxGroup` is a combination of checkbox input controls that
      enables the user to select or deselect values in a group.


      Can be used controlled or uncontrolled.


      `CheckboxGroup` provides two types of `Item`, one being the regular Checkbox `Item`, as well as, the `AllItem` which keeps track of all the other checkboxes on its own or further nested levels. Checking the `AllItem` will check/uncheck all related checkboxes.


      (!) Note that `Item`s need to be mounted to affect the `AllItem` state and be targetted by it. If filtered out or collapsed without them being in the DOM they do not count. This is by design!


      ## Examples


      <CodeBlock live={true} preview={true} code={`  <CheckboxGroup asChild>
          <Flex direction="column" gap={1}>
            <CheckboxGroup.AllItem title="Check all"  />
            <CheckboxGroup.Item value={1} />
            <CheckboxGroup.Item value={2} />
            <CheckboxGroup.Item value={3} />
            <CheckboxGroup.Sub>
            <Flex direction="column" gap={1} css={{ paddingLeft: '$4' }}>
              <CheckboxGroup.AllItem title="Check all nested" defaultChecked={true} asChild />
              <CheckboxGroup.Item value='1 but nested' defaultChecked={true} />
              <CheckboxGroup.Item value='2 but nested' />
            </Flex>
          </CheckboxGroup.Sub>
        </Flex>
      </CheckboxGroup>`} language={"jsx"} />


      ## API Reference


      <ComponentProps component="CheckboxGroup" />


      <ComponentProps component="CheckboxGroup.Sub" />


      <ComponentProps component="CheckboxGroup.AllItem" />


      <ComponentProps component="CheckboxGroup.Item" />
parent: E7irFEo7JeV-MtxTony9G
uuid: c9fe80d8-1052-45a9-9497-b505fe08727b
nestedSlug:
  - components
  - form
  - primitives
  - checkbox-group
---
