---
slug: slider
title: Slider
links:
  viewSource: components/slider
  showReportAnIssue: true
tabs:
  - title: Main
    content: >-
      The `Slider` is a simple component that renders a form slider. 

      It should be rendered with a label for accesibility reasons, so rather than using the `Slider` component directly, it is best to use the `SliderField` component, which provides a field label, a value label, and easily integrates with the `Form` component.


      Should you wish to create a more complex UI with `Field` components, you should use this base component.


      Please note: the `value` or `defaultValue` passed in should always be an array.


      <CodeBlock live={true} preview={true} code={`<Slider defaultValue={[50]} css={{ width: '320px' }} />`} language={"tsx"} />


      ## Multiple Values


      Should you wish to have more than one control on the slider, you can pass those values in the array.


      <CodeBlock live={true} preview={true} code={`<Slider defaultValue={[25, 75]} css={{ width: '320px' }} />`} language={"tsx"} />


      ## Slider.Steps


      A separate component exists to output an array of labels which appear at given value points along the slider. These are passed in to the `steps` property using an array objects that contain a label and a value.


      This is most commonly used within the `SliderField`, but is here in case you need to compose your own complex component.


      Note: it is likely better to create steps as a constant and pass in with `steps={steps}` or similar, but this preview code cannot see values outside of JSX.


      <CodeBlock live={true} preview={true} code={`<Slider defaultValue={[50]} css={{ width: '320px' }}>
        <Slider.Steps
          min={0}
          max={100}
          steps={[
            { value: 0, label: 'min' },
            { value: 50, label: 'mid' },
            { value: 100, label: 'max' }
          ]}
        />
      </Slider>`} language={"tsx"} />


      The component requires min and max values, these should be the same as the optional values that are passed to the Slider component.


      `Slider.Steps` work well with the built in `step` property, which defaults to 1 and changes the size of each movement. For example, this would limit the slider to three values only.


      <CodeBlock live={true} preview={true} code={`<Slider defaultValue={[15]} min={10} max={20} step={5} css={{ width: '320px' }}>
        <Slider.Steps
          min={10}
          max={20}
          steps={[
            { value: 10, label: 'min' },
            { value: 15, label: 'mid' },
            { value: 20, label: 'max' }
          ]}
        />
      </Slider>`} language={"tsx"} />


      ## Slider.Value


      A separate component exists to output the value from a slider. This is most commonly used within the `SliderField`, but is here in case you need to compose your own complex component.


      <CodeBlock live={true} preview={true} code={`<Slider defaultValue={[50]} css={{ width: '320px' }}>
        {/*
         \* The Slider.Value value must be manually controlled using onValueChange
         \* from Slider. This is a visual example of how would render Slider.Value
         \* and will not update when changed.
         */}
        <Slider.Value value={[50]} />
      </Slider>`} language={"tsx"} />


      By default this simply outputs the value, however, this can be customised in a number of ways. The property `outputLabel` accepts a function that passes the value selected in the slider and expects a string returned for the label.


      You can also use this is in more complex ways, for example to set empty states and pluralisation, like below.


      <CodeBlock live={false} preview={false} code={`<Slider defaultValue={[50]} css={{ width: '320px' }}>
        <Slider.Value
          value={[50]}
          outputLabel={(value) =>  value === 0
              ? 'You have no geese'
              : 'You have ' + value + ' ' + value === 1 ? 'goose' : 'geese'}
          }
        />
      </Slider>`} language={"tsx"} />


      Should you wish to use the label with multiple values, you can use `Array.join()` like below.


      <CodeBlock live={false} preview={false} code={`<Slider.Value
        value={[25, 75]}
        outputLabel={(value) => \`You have between $\{value.join(' and ')\} geese\`}
      />`} language={"tsx"} />


      ## Styling


      Depending on the background of your page, you can change the theme of the track to be either light or tonal using `theme="light"`. Default is `theme="tonal"`.


      <CodeBlock live={true} preview={true} code={`<Box css={{ p: '$5', bg: '$tonal100' }}>
        <Slider theme="light" defaultValue={[50]} css={{ width: '320px' }} />
      </Box>`} language={"tsx"} />


      ## API Reference


      <ComponentProps component="Slider" />
parent: E7irFEo7JeV-MtxTony9G
uuid: 1tFvJEHLzSO0EKyC-RGIM
nestedSlug:
  - components
  - form
  - primitives
  - slider
---
