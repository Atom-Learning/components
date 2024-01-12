---
slug: grid
title: Grid
links:
  viewSource: components/grid
  showReportAnIssue: true
tabs:
  - content: >-
      The Grid component implements a simple CSS grid with auto-fit columns


      The `gap` prop specifies the distance between items in the grid using the theme's `space` scale and the `minItemSize` prop specifies, in any valid CSS units, the minimum size of each grid item.


      **Note:** Passing percentage values into `minItemSize` will result in unintuitive behaviour. E.g. `minItemSize="50%"` will result in only one item per row because `50%` `width` + any `gap` between the items means the total width of the row will be `50%` + `50%` + `gap` which will wrap the second item onto the next line.


      <CodeBlock live={true} preview={true} code={`<Grid minItemSize="10em" gap="3" css={{ width: '100%' }}>
        {Array.from(Array(6)).map((_, i) => (
          <Box key={i} css={{ bg: '$primary800', height: '10em' }} />
        ))}
      </Grid>`} language={"tsx"} />


      Should you need further control of the size of grid items, you can pass `maxItemSize`, which accepts the same value types as `minItemSize`. This is useful when you wish to control the width of items that may or may not fill the container width based on content, so they do not stretch to fill the width.


      <CodeBlock live={true} preview={true} code={`<Grid minItemSize="10em" maxItemSize="10em" gap="3" css={{ width: '100%' }}>
        {Array.from(Array(3)).map((_, i) => (
          <Box key={i} css={{ bg: '$primary800', height: '10em' }} />
        ))}
      </Grid>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Grid" />
    title: Main
parent: J3bsmpB7-_uuqm05peuTA
uuid: qVRcaD27FqnJb1hWFhwE-
nestedSlug:
  - components
  - grid
---
