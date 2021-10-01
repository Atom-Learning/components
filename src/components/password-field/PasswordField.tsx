import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldWrapper } from '~/components/field-wrapper'
import type { ValidationOptions } from '~/components/form'
import { useFieldError } from '~/components/form'
import { InputProps } from '~/components/input'
import { PasswordInput } from '~/components/password-input'
import { CSS } from '~/stitches'

type PasswordFieldProps = InputProps & {
  description?: string
  hidePasswordText?: string
  label?: string
  name: string
  prompt?: { label: string; link: string }
  showPasswordText?: string
  validation?: ValidationOptions
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  css = {},
  label = 'Password',
  name,
  prompt = undefined,
  description,
  validation,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)

  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={{ ...css, position: 'relative' } as CSS}
      description={description}
      error={error}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
    >
      <PasswordInput
        autoComplete="current-password"
        name={name}
        id={name}
        ref={ref}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

PasswordField.displayName = 'PasswordField'
