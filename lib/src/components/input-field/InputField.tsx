import * as React from 'react'

import { FieldWrapper } from '~/components/field-wrapper'
import { Input } from '~/components/input'

type TInputFieldProps = React.ComponentProps<typeof Input> & React.ComponentProps<typeof FieldWrapper>

export const InputField = React.forwardRef<HTMLElement, TInputFieldProps>(({
  name,
  label,
  prompt,
  required,
  feedback,
  description,
  hideLabel,
  css,
  ...rest
}, ref) => {
  const wrapperProps = {
    name,
    label,
    prompt,
    required,
    feedback,
    description,
    hideLabel,
    css
  }

  return (
    <FieldWrapper ref={ref} {...wrapperProps}>
      <Input {...rest} />
    </FieldWrapper>
  )
})

InputField.displayName = 'InputField'
