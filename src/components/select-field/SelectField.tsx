import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper, FieldWrapperProps } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Select, SelectProps } from '~/components/select'

type SelectFieldProps = SelectProps &
  FieldWrapperProps & { name: string; validation: ValidationOptions }

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  name,
  label,
  validation,
  ...remainingProps
}) => {
  const { register, errors } = useFormContext()
  const ref = validation ? register(validation) : register

  const error = errors[name]?.message

  return (
    <FieldWrapper fieldId={name} label={label} error={error}>
      <Select name={name} id={name} {...remainingProps} ref={ref}>
        {children}
      </Select>
    </FieldWrapper>
  )
}

SelectField.displayName = 'SelectField'
