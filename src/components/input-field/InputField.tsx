import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Input, InputProps } from '~/components/input'

type InputFieldProps = InputProps & {
  description?: string
  label: string
  name: string
  prompt?: { link: string; label: string }
  validation?: ValidationOptions
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
      css={css}
      description={description}
      error={error}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
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
