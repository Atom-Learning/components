import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { useFieldError, ValidationOptions } from '~/components/form'
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
  validation
}) => {
  const { control } = useFormContext()
  const { error } = useFieldError(name)

  return (
    <Fieldset css={css}>
      <Label
        as="legend"
        css={{ p: 0, mb: '$3' }}
        required={Boolean(validation?.required)}
      >
        {label}
      </Label>
      {description && (
        <Text
          size="sm"
          css={{ color: '$tonal300', mb: '$3', maxWidth: '80ch' }}
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
      {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
    </Fieldset>
  )
}

RadioGroupField.Item = RadioField

RadioGroupField.displayName = 'RadioGroupField'
