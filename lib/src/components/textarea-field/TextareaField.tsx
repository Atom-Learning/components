import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import type { FieldWrapperProps } from '~/components/field-wrapper'
import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Textarea, TextareaProps } from '~/components/textarea'

type TextareaFieldProps = TextareaProps &
  Omit<FieldWrapperProps, 'fieldId' | 'error'> & {
    name: string
    validation?: ValidationOptions
  }

export const TextareaField: React.FC<TextareaFieldProps> = ({
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
