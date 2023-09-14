import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import type { CSS } from '~/stitches'

import type { NumberInputProps } from '../number-input/NumberInput'
import { NumberInput } from '../number-input/NumberInput'

export interface NumberInputFieldProps extends NumberInputProps {
  css?: CSS
  hideLabel?: boolean
  description?: string
  label: string
  name: string
  prompt?: { link: string; label: string }
  validation?: ValidationOptions
}

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
  css,
  defaultValue = 0,
  hideLabel,
  value,
  prompt,
  description,
  label,
  name,
  validation,
  onValueChange,
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
  const { error } = useFieldError(name)

  React.useEffect(() => {
    // Update the react-hook-form inner value to match what is passed in.
    if (typeof value !== 'undefined') onChange(value)
  }, [value])

  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      hideLabel={hideLabel}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <NumberInput
        id={name}
        name={innerName}
        ref={ref}
        {...(error && { state: 'error', 'aria-invalid': true })}
        defaultValue={defaultValue}
        onValueChange={(newValue) => {
          onChange(newValue)
          onValueChange?.(newValue)
        }}
        value={innerValue}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

NumberInputField.displayName = 'NumberInputField'
