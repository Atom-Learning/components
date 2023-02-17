---
slug: icon
title: Icon
links:
  viewSource: components/icon
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      `Icon` is a light wrapper component that provides a standardised set of
      styles to the icon in use. It requires an SVG from our icon library to be
      passed into the `is` prop.


      <CodeBlock live={true} preview={true} code={`<Stack>
        <Icon is={BatteryMedium} />
        <Icon is={Crossing} />
        <Icon is={EyeCrossed} />
        <Icon is={Paperclip} />
        <Icon is={Sun} />
        <Icon is={Wheelchair} />
      </Stack>`} language={"tsx"} />


      Ensure that you pair the imported icon (in this case `Brightness`) with the `Icon` component to render in a consistent and reliable way. Review the available icons on the [icon listing page](https://design.atomlearning.technology/theme/icons)


      <CodeBlock live={false} preview={false} code={`import { Icon } from '@atom-learning/components'

      import { Brightness } from '@atom-learning/icons'


      const Component = () => (
        <Icon is={Brightness} size="md" css={{ color: '$primary' }} />
      )`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Icon" />
parent: A4GgFCvNbHBt9iaKdB7Kv
uuid: lk6zpZ0zUgwTAH3l-2GkO
nestedSlug:
  - components
  - content
  - icon
---
