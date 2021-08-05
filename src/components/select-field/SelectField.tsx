import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper, FieldWrapperProps } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Select, SelectProps } from '~/components/select'

type SelectFieldProps = SelectProps &
  FieldWrapperProps & {
    name: string
    validation?: ValidationOptions
  }

export const SelectField: React.FC<SelectFieldProps> = ({
  css = undefined,
  children,
  name,
  label,
  validation,
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
    >
      <Select
        name={name}
        id={name}
        {...remainingProps}
        ref={ref}
        {...(error && { state: 'error' })}
      >
        {children}
      </Select>
    </FieldWrapper>
  )
}

SelectField.displayName = 'SelectField'
