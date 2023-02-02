---
slug: progress-bar
title: Progress Bar
links:
  viewSource: components/progress-bar
  showReportAnIssue: true
tabs:
  - content: >-
      A styled progress bar.


      ## Accessibility


      A `ProgressBar` needs to be associated with a label for accessibility purposes, therefore the component `id` needs to be set. If a label is not available, please add an `aria-label` to ensure that the component remains accessible. For more examples, please read [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.1/aria-progressbar-name?application=axeAPI)


      <CodeBlock live={true} preview={true} code={`<ProgressBar value={20} aria-label="Completion rate" />`} language={"tsx"} />


      ## Themes


      These are the available `themes` for this component: `Primary` (default), `Success`, `Warning`, `Danger`


      <CodeBlock live={true} preview={true} code={`<Stack gap={3} css={{width: '100%'}}>
        <ProgressBar value={20} />
        <ProgressBar theme="success" value={20} aria-label="Completion rate" />
        <ProgressBar theme="warning" value={20} aria-label="Completion rate" />
        <ProgressBar theme="danger" value={20} aria-label="Completion rate" />
      </Stack>`} language={"tsx"} />


      ## Appearance


      There two options for the `appearance` property: `solid` and `outline(default)`. These are the available `outline` variations for all the `themes`.


      <CodeBlock live={true} preview={true} code={`<Stack gap={3} css={{width: '100%'}}>
        <ProgressBar appearance="solid" value={20} aria-label="Completion rate" />
        <ProgressBar
          appearance="solid"
          theme="success"
          value={20}
          aria-label="Completion rate"
        />
        <ProgressBar
          appearance="solid"
          theme="warning"
          value={20}
          aria-label="Completion rate"
        />
        <ProgressBar
          appearance="solid"
          theme="danger"
          value={20}
          aria-label="Completion rate"
        />
      </Stack>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="ProgressBar" />
    title: Main
parent: HGItoEG3XVs9DpOLugTot
uuid: P6daKkk_E0jehDkN0So_A
nestedSlug:
  - components
  - feedback
  - progress-bar
---
