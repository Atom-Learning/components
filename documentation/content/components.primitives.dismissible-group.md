---
slug: dismissible-group
title: Dismissible Group
links:
  viewSource: components/dismissible-group
  showReportAnIssue: true
tabs:
  - content: >-
      A set of dismissible elements.


      `DismissibleGroup` itself is a primitive. It has not been designed so it should not be used out-of-the-box as a user facing component. Test the component is accessible depending on each implementation use case.


      <CodeBlock live={true} preview={true} code={`<DismissibleGroup
        onDismiss={(value) => {
          alert(`dismiss ${value}`)
        }}
      >
        <DismissibleGroup.Item value="a">
          A
          <DismissibleGroup.Trigger aria-label="Dismiss A" />
        </DismissibleGroup.Item>
        <DismissibleGroup.Item value="b" disabled>
          B
          <DismissibleGroup.Trigger />
        </DismissibleGroup.Item>
        <DismissibleGroup.Item value="c" disabled>
          C
        </DismissibleGroup.Item>
      </DismissibleGroup>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="DismissibleGroup" />
    title: Main
parent: DTp2m8Cs7Kzg_CL4F5zd_
uuid: v4twQAMJWi-lU3cmUkxKh
nestedSlug:
  - components
  - primitives
  - dismissible-group
---
