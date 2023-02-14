import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FieldWrapper,
  FieldElementWrapperProps
} from '~/components/field-wrapper'

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

  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={{ ...css, position: 'relative' } as CSS}
      description={description}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
      criteriaMode={validation?.criteriaMode}
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
