import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FieldElementWrapperProps,
  FieldWrapper
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'
import { PasswordInput } from '~/components/password-input'
import { CSS } from '~/stitches'

type PasswordFieldProps = React.ComponentProps<typeof PasswordInput> &
  Omit<FieldElementWrapperProps, 'label'> & {
    label?: string
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
        {...(error !== undefined && { state: 'error' })}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

PasswordField.displayName = 'PasswordField'
