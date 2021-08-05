import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import type { FieldWrapperProps } from '~/components/field-wrapper'
import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Textarea, TextareaProps } from '~/components/textarea'

type TextareaFieldProps = TextareaProps &
  FieldWrapperProps & {
    name: string
    validation?: ValidationOptions
  }

export const TextareaField: React.FC<TextareaFieldProps> = ({
  css = undefined,
  label,
  name,
  validation,
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
      description={description}
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
