import * as React from 'react'

import { useFormContext } from 'react-hook-form'
import { FieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Input, InputProps } from '~/components/input'

type InputFieldProps = InputProps & {
  label: string
  error?: string
  required?: boolean
  name: string
  // TODO: figure out how to get the relevant types out of react-hook-form and type this properly

  validation?: ValidationOptions
}

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  error = undefined,
  required = false,
  validation,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      fieldId={name}
      css={css}
    >
      <Input
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

InputField.displayName = 'InputField'
