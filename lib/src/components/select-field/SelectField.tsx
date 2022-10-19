import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper, FieldWrapperProps } from '~/components/field-wrapper'
import { useFieldError, ValidationOptions } from '~/components/form'
import { Select, SelectProps } from '~/components/select'

type SelectFieldProps = SelectProps &
  Omit<FieldWrapperProps, 'fieldId' | 'error'> & {
    name: string
    validation?: ValidationOptions
  }

export const SelectField: React.FC<SelectFieldProps> = ({
  css = undefined,
  children,
  name,
  label,
  validation,
  prompt,
  description,
  hideLabel,
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
      hideLabel={hideLabel}
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
