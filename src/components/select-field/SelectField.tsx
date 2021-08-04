import * as React from 'react'
import { useFormContext, get } from 'react-hook-form'

import { FieldWrapper, FieldWrapperProps } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
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
  required = false,
  validation,
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
