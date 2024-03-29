import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { DateInput, DateInputProps } from '~/components/date-input'
import {
  FieldElementWrapperProps,
  FieldWrapper
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'

type DateFieldProps = DateInputProps & FieldElementWrapperProps

export const DateField = ({
  css,
  hideLabel,
  label,
  name,
  validation,
  prompt,
  description,
  ...remainingProps
}: DateFieldProps) => {
  const { register, trigger } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      error={error}
      fieldId={name}
      hideLabel={hideLabel}
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
