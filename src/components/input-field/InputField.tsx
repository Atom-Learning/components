import * as React from 'react'
import { useFormContext, get } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Input, InputProps } from '~/components/input'

type InputFieldProps = InputProps & {
  label: string
  required?: boolean
  name: string
  description?: string
  validation?: ValidationOptions
  prompt?: { link: string; label: string }
}

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  required = false,
  validation,
  prompt,
  description,
  ...remainingProps
}) => {
  const { register, errors } = useFormContext()
  const ref = validation ? register(validation) : register

  const error = get(errors, name)

  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error?.message}
      fieldId={name}
      css={css}
      prompt={prompt}
      description={description}
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
