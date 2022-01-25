import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { DateInput, DateInputProps } from '~/components/date-input'
import { FieldWrapper } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import type { CSS } from '~/stitches'

type DateFieldProps = DateInputProps & {
  css?: CSS
  description?: string
  label: string
  name: string
  prompt?: { link: string; label: string }
  validation?: ValidationOptions
  handleChange?: (value: Date) => void
}

export const DateField: React.FC<DateFieldProps> = ({
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
      <DateInput
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
        revalidate={trigger}
      />
    </FieldWrapper>
  )
}

DateField.displayName = 'DateField'
