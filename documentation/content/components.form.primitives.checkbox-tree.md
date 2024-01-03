---
slug: checkbox-tree
title: Checkbox Tree
links:
  showReportAnIssue: true
  viewSource: components/checkbox-tree
tabs:
  - title: Code
    content: >-
      `CheckboxTree` is a component that represents checkbox controls in a
      hierarchical or tree-like structure, where items are organised into parent
      nodes and child nodes.


      It is a combination component comprised of `Tree` and `CheckboxGroup` and shares most of the properties of these two components.


      Can be used controlled or uncontrolled.


      ## Examples


      <CodeBlock live={true} preview={true} code={`<CheckboxTree css={{ width: 300}}>
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
                  <CheckboxTree.CollapsibleTrigger title="All administrators" label="Open: Show individual administrators"><Icon is={Person} />Administrators</CheckboxTree.CollapsibleTrigger>
                  <CheckboxTree.CollapsibleContent>
                    <CheckboxTree.Item value="bob">Bob</CheckboxTree.Item>
                    <CheckboxTree.Item value="alice">Alice</CheckboxTree.Item>
                    <CheckboxTree.Collapsible>
                      <CheckboxTree.CollapsibleTrigger title="All special admins" label="Open: Show special admins">Special Admins</CheckboxTree.CollapsibleTrigger>
                      <CheckboxTree.CollapsibleContent>
                        <CheckboxTree.Item value={7}>Admin 7</CheckboxTree.Item>
                        <CheckboxTree.Item value={8}>Admin 8</CheckboxTree.Item>
                        <CheckboxTree.Item value="nine">Admin 9</CheckboxTree.Item>
                        <CheckboxTree.Collapsible>
                          <CheckboxTree.CollapsibleTrigger title="further nested all checkbox" label="Open: Nested"><Icon is={Person} />Nested</CheckboxTree.CollapsibleTrigger>
                          <CheckboxTree.CollapsibleContent>
                            <CheckboxTree.Item value={10}>Longname Willget Truncated</CheckboxTree.Item>
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
