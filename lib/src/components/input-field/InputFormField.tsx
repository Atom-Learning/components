import * as React from 'react'

import { FormFieldWrapper } from '~/components/field-wrapper'
import { Input, InputProps } from '~/components/input'

type TInputFormFieldProps = InputProps & React.ComponentProps<typeof FormFieldWrapper>

export const InputFormField = React.forwardRef<HTMLElement, TInputFormFieldProps>(({
  name,
  label,
  value,
  defaultValue,
  prompt,
  required,
  feedback,
  description,
  hideLabel,
  css,
  validation,
  ...rest
}, ref) => {
  const wrapperProps = {
    name,
    label,
    value,
    defaultValue,
    prompt,
    required,
    feedback,
    description,
    hideLabel,
    css,
    validation,
  }

  return (
    <FormFieldWrapper ref={ref} {...wrapperProps} >
      <Input {...rest} />
    </FormFieldWrapper>
  )
})

InputFormField.displayName = 'InputFormField'
