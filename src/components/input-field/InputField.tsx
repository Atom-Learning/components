import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Input, InputProps } from '~/components/input'

type InputFieldProps = InputProps & {
  label: string
  name: string
  description?: string
  validation?: ValidationOptions
  prompt?: { link: string; label: string }
}

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  validation,
  prompt,
  description,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      label={label}
      required={Boolean(validation?.required)}
      error={error}
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
