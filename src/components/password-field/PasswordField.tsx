import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import type { ValidationOptions } from '~/components/form'
import { useFieldError } from '~/components/form'
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
  validation?: ValidationOptions
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  css = {},
  label = 'Password',
  name,
  prompt = undefined,
  validation,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)

  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      label={label}
      fieldId={name}
      prompt={prompt}
      css={{ ...css, position: 'relative' } as CSS}
      error={error}
    >
      <PasswordInput
        autoComplete="current-password"
        name={name}
        id={name}
        required={Boolean(validation?.required)}
        ref={ref}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

PasswordField.displayName = 'PasswordField'
