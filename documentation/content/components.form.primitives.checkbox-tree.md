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
  - title: Usage
    content: >-
      ## Overview


      Input component that handles nested options within a tree structure allowing multiple selections across various levels of a hierarchy, where items are organized into parent nodes and child nodes.


      It combines the features of a [Tree](https://atomlearning.design/components/navigation/tree?tab=code) (hierarchical structure) with [Checkbox group](https://atomlearning.design/components/form/primitives/checkbox-tree) with checkboxes associated with each node in the tree.\

      Each checkbox allows users to select or deselect specific nodes or items within the hierarchy.




      ![Checkbox Tree](/assets/images/checkbox-tree-01.svg "Checkbox Tree")


      ![Checkbox tree with elements](/assets/images/checkbox-tree-02.svg "Checkbox tree with elements")


      Checkbox trees can have the following elements:


      * Search bar for searching items in the tree view.

      * Checkboxes for selecting items in the tree view.

      * Badges for showing the number of child nodes in the tree view.

      * Icons for visually representing the node types in the tree view.


      ### When to use


      Checkbox Trees are commonly used when users need to perform actions on multiple items simultaneously.\

      \

      Multi-Selection: Checkbox Trees are useful when users need to select multiple items from a hierarchical list. For example, selecting subjects, topics, subtopics and atoms.


      ![Course hierarchy selection tree](/assets/images/checkbox-tree-03.svg "Course hierarchy selection tree")


      Filtering or Filtering by category: In scenarios where you have a hierarchical list of items, Checkbox Trees can allow users to filter items by category or attribute. Users can select checkboxes for various categories to narrow down their search results.


      ## Behaviour






      ![Clickable labels in checkbox tree](/assets/images/checkbox-tree-04.svg "Clickable labels in checkbox tree")


      The Tree items offer the option to expand or collapse them, which can be achieved by either selecting the chevron icon or clicking on the text. However, when the items are designed to be selectable, clicking on the text active the selection status, and clicking on the chevron icon toggles the expansion state of the item.


      ## Do's and Don'ts


      <DosAndDonts items={[]} />
parent: E7irFEo7JeV-MtxTony9G
uuid: c9fe80d8-1052-45a9-9497-b505fe08727b
nestedSlug:
  - components
  - form
  - primitives
  - checkbox-tree
---
