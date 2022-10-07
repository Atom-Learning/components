import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import type { InputProps } from '~/components/input'
import type { CSS } from '~/stitches'

import type { NumberInputProps } from '../number-input/NumberInput'
import { NumberInput } from '../number-input/NumberInput'

export interface NumberInputFieldProps extends NumberInputProps {
  css?: CSS
  description?: string
  label: string
  name: string
  prompt?: { link: string; label: string }
  validation?: ValidationOptions
}

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  ...remainingProps
}) => {
  const { register, trigger } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <NumberInput
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
        onChange={() => trigger}
      />
    </FieldWrapper>
  )
}

NumberInputField.displayName = 'NumberInputField'
