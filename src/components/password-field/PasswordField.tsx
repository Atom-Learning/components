import * as React from 'react'
import { useFormContext, get } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import type { ValidationOptions } from '~/components/form'
import { InputProps } from '~/components/input'
import { PasswordInput } from '~/components/password-input'
import { CSS } from '~/stitches'

type PasswordFieldProps = InputProps & {
  label?: string
  prompt?: {
    label: string
    link: string
  }
  hidePasswordText?: string
  showPasswordText?: string
  required?: boolean
  validation?: ValidationOptions
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  css = {},
  label = 'Password',
  name,
  prompt = undefined,
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
      fieldId={name}
      prompt={prompt}
      css={{ ...css, position: 'relative' } as CSS}
      error={error?.message}
    >
      <PasswordInput
        autoComplete="current-password"
        name={name}
        id={name}
        required={required}
        ref={ref}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

PasswordField.displayName = 'PasswordField'
