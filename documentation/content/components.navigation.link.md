---
slug: link
title: Link
links:
  viewSource: components/link
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      Link is a light wrapper around the HTML anchor element. It adds default
      styling and the `css` prop.


      ## Sizes


      `size="xs"|"sm"|"md"|"lg"|"xl"`


      <CodeBlock live={true} preview={true} code={`<Link href="http://example.com/" size="sm">
        I'm a link
      </Link>`} language={"tsx"} />


      ## Polymorphism


      The `Link` component supports polymorphism, therefore depending on whether it receives an `onClick`/`href` as a prop, it will produce a `button` or `link` respectively


      <CodeBlock live={true} preview={true} code={`<Link href="http://example.com/">
        I'm a link
      </Link>`} language={"tsx"} />


      <CodeBlock live={true} preview={true} code={`<Link onClick={() => alert('clicked')}>
        I'm a link
      </Link>`} language={"tsx"} />

      ## API Reference


      <ComponentProps component="Link" />
parent: 95SvEwV7BznSChttFanpW
uuid: yO-SuTjsVIBo9FkHt5v44
nestedSlug:
  - components
  - navigation
  - link
---
