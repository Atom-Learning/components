import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { Slider, SliderProps } from '~/components/slider'
import { SliderValueType } from '../slider/SliderValue'
import type { CSS } from '~/stitches'

type SliderFieldProps = SliderProps &
  SliderValueType & {
    css?: CSS
    label: string
    name: string
    defaultValue: number[]
    showValue?: boolean
  }

export const SliderField: React.FC<SliderFieldProps> = ({
  css,
  label,
  name,
  defaultValue,
  outputLabel,
  emptyData,
  item,
  showValue = true,
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
          <>
            <Slider
              name={name}
              defaultValue={defaultValue}
              onValueChange={onChange}
              value={value}
              {...remainingProps}
            />
            {showValue && (
              <Slider.Value
                value={value || defaultValue}
                outputLabel={outputLabel}
                emptyData={emptyData}
                item={item}
              />
            )}
          </>
        )}
      />
    </FieldWrapper>
  )
}

SliderField.displayName = 'SliderField'
