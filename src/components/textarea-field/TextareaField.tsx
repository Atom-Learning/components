import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Textarea, TextareaProps } from '~/components/textarea'

type TextareaFieldProps = TextareaProps & {
  label: string
  required?: boolean
  name: string
  validation?: ValidationOptions
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  css = undefined,
  label,
  name,
  required = false,
  validation,
  ...remainingProps
}) => {
  const { register, errors } = useFormContext()

  const ref = validation ? register(validation) : register
  const error = errors[name]

  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      fieldId={name}
      css={css}
    >
      <Textarea
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

TextareaField.displayName = 'TextareaField'
