import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Input, InputProps } from '~/components/input'

type InputFieldProps = InputProps & {
  label: string
  required?: boolean
  name: string
  validation?: ValidationOptions
}

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  required = false,
  validation,
  ...remainingProps
}) => {
  const { register, errors } = useFormContext()
  const ref = validation ? register(validation) : register

  const error = errors[name]?.message

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
