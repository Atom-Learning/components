---
slug: checkbox-tree
title: Checkbox Tree
links:
  showReportAnIssue: true
  viewSource: components/checkbox-group
tabs:
  - title: Code
    content: >-
      `CheckboxTree` is a component that represents checkbox controls in a
      hierarchical or tree-like structure, where items are organised into parent
      nodes and child nodes.


      It is a combination component comprised of `Tree` and `CheckboxGroup` and shares most of the properties of these two components.


      Can be used controlled or uncontrolled.


      ## Examples


      <CodeBlock live={true} preview={true} code={`<CheckboxTree>
                <CheckboxTree.Item value={1}><Icon is={Person} /> One</CheckboxTree.Item>
                <CheckboxTree.Item value={2}>Two</CheckboxTree.Item>
                <CheckboxTree.Collapsible>
                  <CheckboxTree.CollapsibleTrigger title="This is used for accessibility when someone hovers over/focuses the checkbox since it has no value for \`.AllItem\`." label="This is used for a11y when someone focuses the collapsable trigger."><Icon is={Person} />Trigger 1</CheckboxTree.CollapsibleTrigger>
                  <CheckboxTree.CollapsibleContent>
                    <CheckboxTree.Item value="nested 1"><Icon is={Person} />Nested: One</CheckboxTree.Item>
                    <CheckboxTree.Item value={4}>Nested: Two</CheckboxTree.Item>
                  </CheckboxTree.CollapsibleContent>
                </CheckboxTree.Collapsible>
                <CheckboxTree.Collapsible defaultOpen={true}>
                  <CheckboxTree.CollapsibleTrigger title="trigger 2" label="Open: Trigger 2"><Icon is={Person} />Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2 Trigger 2</CheckboxTree.CollapsibleTrigger>
                  <CheckboxTree.CollapsibleContent>
                    <CheckboxTree.Item value={5}>Nested: Three</CheckboxTree.Item>
                    <CheckboxTree.Item value={6}>Nested: Four</CheckboxTree.Item>
                  </CheckboxTree.CollapsibleContent>
                </CheckboxTree.Collapsible>
                <CheckboxTree.Collapsible>
                  <CheckboxTree.CollapsibleTrigger  title="trigger with submenu" label="Open: Trigger with submenu">Trigger With Submenu</CheckboxTree.CollapsibleTrigger>
                  <CheckboxTree.CollapsibleContent>
                    <CheckboxTree.Item value={7}>Nested: #1</CheckboxTree.Item>
                    <CheckboxTree.Item value={8}>Nested: #2</CheckboxTree.Item>
                    <CheckboxTree.Item value="nine">Nested: #3</CheckboxTree.Item>
                    <CheckboxTree.Collapsible>
                      <CheckboxTree.CollapsibleTrigger title="further nested all checkbox" label="Open: Nested"><Icon is={Person} />Nested</CheckboxTree.CollapsibleTrigger>
                      <CheckboxTree.CollapsibleContent>
                        <CheckboxTree.Item value={10}>Nested: #4</CheckboxTree.Item>
                        <CheckboxTree.Collapsible>
                          <CheckboxTree.CollapsibleTrigger title="even further nested all checkbox" label="Open: Nested nested">Nested Nested</CheckboxTree.CollapsibleTrigger>
                          <CheckboxTree.CollapsibleContent>
                            <CheckboxTree.Item value="nested 5">Nested: #5</CheckboxTree.Item>
                          </CheckboxTree.CollapsibleContent>
                        </CheckboxTree.Collapsible>
                      </CheckboxTree.CollapsibleContent>
                    </CheckboxTree.Collapsible>
                  </CheckboxTree.CollapsibleContent>
                </CheckboxTree.Collapsible>
              </CheckboxTree>`} language={"jsx"} />

      ## API Reference


      <ComponentProps component="CheckboxTree" />


      <ComponentProps component="CheckboxTree.Collapsible" />


      <ComponentProps component="CheckboxTree.CollapsibleTrigger" />


      <ComponentProps component="CheckboxTree.CollapsibleContent" />


      <ComponentProps component="CheckboxTree.Item" />
parent: E7irFEo7JeV-MtxTony9G
uuid: c9fe80d8-1052-45a9-9497-b505fe08727b
nestedSlug:
  - components
  - form
  - primitives
  - checkbox-tree
---
