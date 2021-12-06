import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { Slider, SliderProps } from '~/components/slider'
import type { CSS } from '~/stitches'

type SliderFieldProps = SliderProps & {
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
            {...remainingProps}
          />
        )}
      />
    </FieldWrapper>
  )
}

SliderField.displayName = 'SliderField'
