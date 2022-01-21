import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { Slider, SliderProps } from '~/components/slider'
import { SliderStepsType } from '~/components/slider/SliderSteps'
import { SliderValueType } from '../slider/SliderValue'
import type { CSS } from '~/stitches'

type SliderFieldProps = SliderProps &
  SliderStepsType &
  SliderValueType & {
    css?: CSS
    label: string
    name: string
    defaultValue: number[]
  }

export const SliderField: React.FC<SliderFieldProps> = ({
  css,
  label,
  name,
  defaultValue,
  outputLabel,
  min = 0,
  max = 100,
  steps = [],
  ...remainingProps
}) => {
  const { control } = useFormContext()

  return (
    <FieldWrapper css={css} fieldId={name} label={label}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ onChange, value }) => (
          <Slider
            name={name}
            defaultValue={defaultValue}
            onValueChange={onChange}
            value={value}
            min={min}
            max={max}
            {...remainingProps}
          >
            <Slider.Steps min={min} max={max} steps={steps} />

            <Slider.Value
              value={value || defaultValue}
              outputLabel={outputLabel}
            />
          </Slider>
        )}
      />
    </FieldWrapper>
  )
}

SliderField.displayName = 'SliderField'
