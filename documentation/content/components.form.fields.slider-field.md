---
slug: slider-field
title: Slider Field
links:
  viewSource: components/slider-field
  showReportAnIssue: true
tabs:
  - content: >-
      `SliderField` renders a `Slider` with a label, and easy implementation
      with `Form`. It also renders a `Slider.Value` label underneath the slider,
      and a `Slider.Steps` component should steps be passed in.


      In it's most simple form, a slider allows one value to be set between two given values (default 0 and 100).


      Please note: the `value` or `defaultValue` passed in should always be an array.


      <CodeBlock live={true} preview={true} code={`<Form>
        <SliderField name="slider" label="Select a value" defaultValue={[50]} />
      </Form>`} language={"tsx"} />


      With optional `Slider.Steps`:


      <CodeBlock live={true} preview={true} code={`<Form>
        <SliderField
          name="slider"
          label="Select a value (now with steps)"
          defaultValue={[50]}
          steps={[
            { value: 0, label: 'min' },
            { value: 50, label: 'mid' },
            { value: 100, label: 'max' }
          ]}
        />
      </Form>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="SliderField" />
    title: Main
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - slider-field
---
