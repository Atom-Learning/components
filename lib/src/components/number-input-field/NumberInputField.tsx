import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
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
  feedbackDirection?: 'row' | 'column'
}

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  feedbackDirection,
  ...remainingProps
}) => {
  const { register, trigger } = useFormContext()
  const error = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
      criteriaMode={validation?.criteriaMode}
      feedbackDirection={feedbackDirection}
    >
      <NumberInput
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error', 'aria-invalid': true })}
        {...remainingProps}
        onChange={trigger}
      />
    </FieldWrapper>
  )
}

NumberInputField.displayName = 'NumberInputField'
