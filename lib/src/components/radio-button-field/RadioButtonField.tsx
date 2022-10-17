import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { FieldElementWrapperProps } from '~/components/field-wrapper'
import { Description as FieldDescription } from '~/components/field-wrapper/FieldDescription'
import { useFieldError } from '~/components/form'
import { Label } from '~/components/label'
import { RadioButtonGroup } from '~/components/radio-button'
import { InlineMessage } from '~/components/inline-message'
import { styled } from '~/stitches'

import { RadioField } from './RadioField'

const Fieldset = styled('fieldset', {
  all: 'unset'
})

type RadioButtonFieldProps = React.ComponentProps<typeof RadioButtonGroup> &
  FieldElementWrapperProps

export const RadioButtonField: React.FC<RadioButtonFieldProps> & {
  Item: typeof RadioField
} = ({
  children,
  css,
  direction = 'column',
  defaultValue,
  description,
  label,
  name,
  validation,
  onValueChange
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
        <FieldDescription css={{ mb: '$3' }}>{description}</FieldDescription>
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
            onValueChange={(value) => {
              onChange(value)
              onValueChange?.(value)
            }}
            value={value}
          >
            {children}
          </RadioButtonGroup>
        )}
      />
      {error && <InlineMessage css={{ mt: '$2' }}>{error}</InlineMessage>}
    </Fieldset>
  )
}

RadioButtonField.Item = RadioField

RadioButtonField.displayName = 'RadioButtonField'
