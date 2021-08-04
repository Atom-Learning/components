import * as React from 'react'
import { Controller, useFormContext, get } from 'react-hook-form'

import { ValidationOptions } from '~/components/form'
import { Label } from '~/components/label'
import { RadioButtonGroup } from '~/components/radio'
import { Text } from '~/components/text'
import { ValidationError } from '~/components/validation-error'
import { CSS, styled } from '~/stitches'

import { RadioField } from './RadioField'

const Fieldset = styled('fieldset', {
  all: 'unset'
})

type RadioGroupFieldProps = {
  css?: CSS
  defaultValue?: string
  label: string
  name: string
  required?: boolean
  direction?: 'row' | 'column'
  description?: string
  validation?: ValidationOptions
}

export const RadioGroupField: React.FC<RadioGroupFieldProps> & {
  Item: typeof RadioField
} = ({
  children,
  css,
  direction = 'column',
  defaultValue,
  description,
  label,
  name,
  required = false,
  validation
}) => {
  const { control, errors } = useFormContext()

  const error = get(errors, name)

  return (
    <Fieldset css={css}>
      <Label as="legend" css={{ p: 0, mb: '$3' }} required={required}>
        {label}
      </Label>
      {description && (
        <Text
          size="sm"
          css={{ color: '$tonal500', mb: '$3', maxWidth: '80ch' }}
        >
          {description}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        rules={validation}
        defaultValue={defaultValue}
        render={({ onChange, value }) => (
          <RadioButtonGroup
            direction={direction}
            defaultValue={defaultValue}
            onValueChange={onChange}
            value={value}
          >
            {children}
          </RadioButtonGroup>
        )}
      />
      {error && (
        <ValidationError css={{ mt: '$2' }}>{error?.message}</ValidationError>
      )}
    </Fieldset>
  )
}

RadioGroupField.Item = RadioField

RadioGroupField.displayName = 'RadioGroupField'
