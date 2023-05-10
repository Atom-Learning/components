import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormFieldWrapperProvider } from './FormFieldWrapperContext'

import { FieldWrapper, TFieldWrapperProps } from '~/components/field-wrapper'

import { useFieldError } from '~/components/form'
import type { ValidationOptions } from '~/components/form'

export type TFormFieldWrapperProps = Omit<TFieldWrapperProps, 'name'> & {
  defaultValue?: string | number | readonly string[]
  value?: string | number | readonly string[]
  name: string
  validation?: ValidationOptions
  children?: React.ReactNode
}

export const FormFieldWrapper = React.forwardRef<HTMLElement, TFormFieldWrapperProps>(({
  defaultValue = '',
  value,
  name,
  validation,
  children,
  feedback = [],
  ...rest
}, ref) => {
  const { control } = useFormContext()
  const {
    field: { ref: fieldRef, onChange, value: innerValue, name: innerName }
  } = useController({
    name,
    control,
    rules: validation,
    defaultValue
  })
  const { error } = useFieldError(name)

  React.useEffect(() => {
    // Update the react-hook-form inner value to match what is passed in.
    if (typeof value !== 'undefined') onChange(value)
  }, [value])

  return (
    <FormFieldWrapperProvider
      fieldRef={fieldRef}
      updateValue={onChange}
      value={innerValue}
    >
      <FieldWrapper
        ref={ref}
        {...rest}
        name={innerName}
        required={Boolean(validation?.required)}
        feedback={[...feedback, ...(typeof error !== 'undefined' ? [{ theme: 'error' as const, message: error }] : [])]}
      >
        {children}
      </FieldWrapper>
    </FormFieldWrapperProvider>
  )
})
