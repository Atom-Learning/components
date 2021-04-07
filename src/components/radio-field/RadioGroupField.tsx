import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Box } from '~/components/box'
import { ValidationOptions } from '~/components/form'
import { Label } from '~/components/label'
import { RadioButtonGroup } from '~/components/radio'
import { ValidationError } from '~/components/validation-error'
import { CSS } from '~/stitches'

import { RadioField } from './RadioField'

type RadioGroupFieldProps = {
  css?: CSS
  defaultValue: string
  label: string
  name: string
  validation?: ValidationOptions
}

export const RadioGroupField: React.FC<RadioGroupFieldProps> & {
  Item: typeof RadioField
} = ({ children, css, defaultValue, label, name, validation }) => {
  const { control, errors } = useFormContext()

  return (
    <Box as="fieldset" css={css}>
      <Label as="legend" css={{ mb: '$3' }}>
        {label}
      </Label>
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
      {errors[name] && (
        <ValidationError css={{ mt: '$1' }}>
          {errors[name].message}
        </ValidationError>
      )}
    </Box>
  )
}

RadioGroupField.Item = RadioField

RadioGroupField.displayName = 'RadioGroupField'
