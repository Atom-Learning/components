import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import {
  FieldElementWrapperProps,
  FieldWrapper
} from '~/components/field-wrapper'
import { Slider, SliderProps } from '~/components/slider'
import { SliderStepsType } from '~/components/slider/SliderSteps'

import { SliderValueType } from '../slider/SliderValue'

type SliderFieldProps = SliderProps &
  SliderStepsType &
  SliderValueType &
  FieldElementWrapperProps

export const SliderField: React.FC<SliderFieldProps> = ({
  css,
  label,
  name,
  defaultValue,
  value,
  validation,
  outputLabel,
  min = 0,
  max = 100,
  steps = [],
  ...remainingProps
}) => {
  const { control } = useFormContext()
  const {
    field: { ref, onChange, value: innerValue, name: innerName }
  } = useController({
    name,
    control,
    rules: validation,
    defaultValue
  })

  React.useEffect(() => {
    // Update the react-hook-form inner value to match what is passed in.
    if (value?.length) onChange(value)
  }, [JSON.stringify(value)])

  return (
    <FieldWrapper css={css} fieldId={name} label={label}>
      <Slider
        ref={ref}
        name={innerName}
        onValueChange={onChange}
        value={innerValue}
        min={min}
        max={max}
        {...remainingProps}
      >
        <Slider.Steps min={min} max={max} steps={steps} />

        <Slider.Value value={innerValue} outputLabel={outputLabel} />
      </Slider>
    </FieldWrapper>
  )
}

SliderField.displayName = 'SliderField'
