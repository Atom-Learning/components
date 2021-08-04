import * as React from 'react'
import { Controller, useFormContext, get } from 'react-hook-form'

import { ValidationOptions } from '~/components/form'
import { RadioButtonGroup } from '~/components/radio'
import { FieldWrapper } from '~/index'
import { CSS, styled } from '~/stitches'

import { RadioField } from './RadioField'

const Fieldset = styled('fieldset', {
  all: 'unset'
})

type RadioGroupFieldProps = {
  css?: CSS
  defaultValue: string
  label: string
  name: string
  required?: boolean
  validation?: ValidationOptions
}

export const RadioGroupField: React.FC<RadioGroupFieldProps> & {
  Item: typeof RadioField
} = ({
  children,
  css,
  defaultValue,
  label,
  name,
  required = false,
  validation
}) => {
  const { control, errors } = useFormContext()

  const error = get(errors, name)

  return (
    <FieldWrapper
      fieldId={name}
      label={label}
      required={required}
      css={css}
      error={error?.message}
    >
      <Fieldset>
        <Controller
          control={control}
          name={name}
          rules={validation}
          defaultValue={defaultValue}
          render={({ onChange, value }) => (
            <RadioButtonGroup
              defaultValue={defaultValue}
              onValueChange={onChange}
              value={value}
            >
              {children}
            </RadioButtonGroup>
          )}
        />
      </Fieldset>
    </FieldWrapper>
  )
}

RadioGroupField.Item = RadioField

RadioGroupField.displayName = 'RadioGroupField'
