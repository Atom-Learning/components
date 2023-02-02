---
slug: dismissible
title: Dismissible
links:
  viewSource: components/dismissible
  showReportAnIssue: true
tabs:
  - content: >-
      An element with a dismiss button which removes it from the view


      `Dismissible` itself is a primitive. It has not been designed so it should not be used out-of-the-box as a user facing component. Test the component is accessible depending on each implementation use case.


      <CodeBlock live={true} preview={true} code={`<Dismissible
        value="a"
        onDismiss={(value) => {
          alert(\`dismiss $\{value\}\`)
        }}
      >
        Press the trigger to dismiss this ->
        <Dismissible.Trigger aria-label="Dismiss 'a'" />
      </Dismissible>`} language={"tsx"} />


      <CodeBlock live={true} preview={true} code={`<Dismissible
        value="custom"
        onDismiss={(value) => {
          alert(\`dismiss $\{value\}\`)
        }}
        asChild
      >
        <Box
          css={{
            width: '100%',
            fontFamily: 'system-ui',
            border: '1px solid',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 8
          }}
        >
          Basic custom implementation example
          <Dismissible.Trigger asChild>
            <button type="button">Custom Dismiss Trigger</button>
          </Dismissible.Trigger>
        </Box>
      </Dismissible>`} language={"tsx"} />


      ## API Reference

      <ComponentProps component="Dismissible" />

      <ComponentProps component="Dismissible.Trigger" />
    title: Main
parent: DTp2m8Cs7Kzg_CL4F5zd_
uuid: v4twQAMJWi-lU3cmUkxKh
nestedSlug:
  - components
  - primitives
  - dismissible
---
