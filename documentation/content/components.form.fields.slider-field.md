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
    title: Code
  - title: Usage
    content: >-
      ## Overview


      A slider component is a graphical control element that allows users to select a value within a specific range by sliding a thumb or marker along a horizontal or vertical track. Slider components are commonly used in user interfaces to adjust settings, such as volume, brightness, or temperature.


      ### Accessibility


      It's important to make sure that slider components are accessible to all users, including those with visual impairments. This can be accomplished by using aria-label and aria-valuemin, aria-valuemax, and aria-valuenow attributes to provide accessibility information to screen readers.


      ### Anatomy


      ![Slider 01](/assets/images/slider-01.svg "Slider 01")


      ### Options


      ![Slider with multiple values](/assets/images/slider-02.svg "Slider with multiple values")


      Slider with multiple values


      ![Slider displaying value and label](/assets/images/slider-03.svg "Slider displaying value and label")


      Slider displaying value and label


      ![Slider displaying value and label](/assets/images/slider-04.svg "Slider displaying value and label")


      Slider displaying value and label


      ![Slider with steps](/assets/images/slider-05.svg "Slider with steps")


      Slider with steps


      ## When to use


      Slider components are commonly used in user interfaces to adjust settings or select a value within a specific range.  For example, a slider component might be used to:


      * adjust the time, or number of questions

      * adjust just the volume of a media player

      *  control the brightness of a screen


      \

      Sliders are also used in data visualisation to allow users to explore data ranges and patterns, such as adjusting the time range of a graph or chart.


      ![To adjust settings or select a value within a specific range](/assets/images/slider-06.svg "To adjust settings or select a value within a specific range")


      To adjust settings or select a value within a specific range


      ![To select, explore ranges](/assets/images/slider-07.svg "To select, explore ranges")


      To select, explore ranges




      ## Do's and Don'ts


      <DosAndDonts items={[{"image":"/assets/images/slider-08-do-and-dont-1.svg","type":"do","description":"Provide a label to describe value."},{"image":"/assets/images/slider-09-do-and-dont-2.svg","type":"dont","description":"Provide a label to describe value."},{"image":"/assets/images/slider-10-do-and-dont-3.svg","type":"do","description":"Always use a slider with a label for better accessibility."},{"image":"/assets/images/slider-11-do-and-dont-4.svg","type":"avoid","description":"Using slider without label."},{"image":"/assets/images/slider-12-do-and-dont-5.svg","type":"do","description":"Remember to add enough space, while using this component on smaller screens, to enhance usability."},{"image":"/assets/images/slider-13-do-and-dont-6.svg","type":"dont","description":"Use small spaces around slider components on smaller screens."},{"image":"/assets/images/slider-14-do-and-dont-7.svg","type":"dont","description":"Use for extremely large ranges, e.g. 1-1000."},{"image":"/assets/images/slider-15-do-and-dont-8.svg","type":"dont","description":"Use for ranges, that are too small, e.g. 1-3."}]} />
parent: ru0Ovr_U82kdQX8m3WahL
uuid: MD1mmrf40ecDo4z16-bco
nestedSlug:
  - components
  - form
  - fields
  - slider-field
---
