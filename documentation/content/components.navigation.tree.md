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
parent: 95SvEwV7BznSChttFanpW
uuid: 3b673728-3af3-40a5-ba31-7588581ac2d2
nestedSlug:
  - components
  - navigation
  - tree
---
