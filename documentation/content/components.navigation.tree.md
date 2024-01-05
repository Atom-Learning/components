---
slug: tree
title: Tree
links:
  viewSource: /components/tree
  showReportAnIssue: true
tabs:
  - title: Code
    content: >-
      `Tree` is a component that represents data in a hierarchical or tree-like
      structure, where items are organised into parent nodes and child nodes.


      Users can expand or collapse nodes to reveal or hide their child nodes, allowing them to navigate through the hierarchy efficiently.


      ## Examples


      <CodeBlock live={true} preview={true} code={`<Tree css={{width: 300}}>
        <Tree.Item>One</Tree.Item>
        <Tree.Item>Two</Tree.Item>
        <Tree.Collapsible>
          <Tree.CollapsibleTrigger label="Expand: Trigger 1"><Icon is={Sun} /> Trigger 1</Tree.CollapsibleTrigger>
          <Tree.CollapsibleContent>
            <Tree.Item>Nested: One</Tree.Item>
            <Tree.Item>Nested: Two</Tree.Item>
          </Tree.CollapsibleContent>
        </Tree.Collapsible>
        <Tree.Collapsible defaultOpen={true}>
          <Tree.CollapsibleTrigger label="Expand: Trigger 2">Trigger 2<Icon is={Bell} /></Tree.CollapsibleTrigger>
          <Tree.CollapsibleContent>
            <Tree.Item>Nested: Three</Tree.Item>
            <Tree.Item>Nested: Four</Tree.Item>
          </Tree.CollapsibleContent>
        </Tree.Collapsible>
        <Tree.Collapsible>
          <Tree.CollapsibleTrigger label="Expand: Trigger With Submenu">Trigger With Submenu</Tree.CollapsibleTrigger>
          <Tree.CollapsibleContent>
            <Tree.Item>Nested: #1</Tree.Item>
            <Tree.Item>Nested: #2</Tree.Item>
            <Tree.Item>Nested: #3</Tree.Item>
            <Tree.Collapsible>
              <Tree.CollapsibleTrigger label="Expand: Nested">Nested</Tree.CollapsibleTrigger>
              <Tree.CollapsibleContent>
                <Tree.Item>Nested: #4</Tree.Item>
                <Tree.Collapsible>
                  <Tree.CollapsibleTrigger label="Expand: Nested Nested">Nested Nested</Tree.CollapsibleTrigger>
                  <Tree.CollapsibleContent>
                    <Tree.Item>Nested: #5</Tree.Item>
                  </Tree.CollapsibleContent>
                </Tree.Collapsible>
              </Tree.CollapsibleContent>
            </Tree.Collapsible>
          </Tree.CollapsibleContent>
        </Tree.Collapsible>
      </Tree>`} language={"jsx"} />


      ## API Reference


      <ComponentProps component="Tree" />


      <ComponentProps component="Tree.Collapsible" />


      <ComponentProps component="Tree.CollapsibleTrigger" />


      <ComponentProps component="Tree.CollapsibleContent" />


      <ComponentProps component="Tree.Item" />


      <ComponentProps component="Tree.Icon" />


      <ComponentProps component="Tree.Text" />
  - title: Usage
    content: >-
      ## Overview


      A component that represents data in a hierarchical or tree-like structure, where items are organized into parent nodes and child nodes.


      Expand/Collapse: Users can often expand or collapse nodes to reveal or hide their child nodes, allowing them to navigate through the hierarchy efficiently.\

      \

      Tree uses chevron icons to convey whether they have child nodes, are expanded or collapsed.




      ![Tree](/assets/images/tree-01.svg "Tree")


      * Parent node: Tree item that contains other items

      * Child node: Tree item within a parent node 

      * Leaf node: Tree item without children




      ![Tree with elements](/assets/images/tree-02.svg "Tree with elements")


      Trees can have the following elements:


      * Search bar for searching items in the tree view.

      * Badges for showing the number of child nodes in the tree view.

      * Icons for visually representing the node types in the tree view.


      When used with checkboxes see [Checkbox Tree](/components/form/primitives/checkbox-tree)


      ### Behaviour


      ![Tree clickable labels](/assets/images/tree-03.svg "Tree clickable labels")


      The tree items offer the option to expand or collapse them, which can be achieved by either selecting the chevron icon or clicking on the text. However, when the items are designed to be selectable, clicking on the text active the selection status, and clicking on the chevron icon toggles the expansion state of the item.


      ## Do's and Don'ts


      <DosAndDonts items={[]} />
parent: 95SvEwV7BznSChttFanpW
uuid: 3b673728-3af3-40a5-ba31-7588581ac2d2
nestedSlug:
  - components
  - navigation
  - tree
---
