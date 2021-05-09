import { Eye, EyeClosed } from '@atom-learning/icons'
import * as React from 'react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { ActionIcon } from '~/components/action-icon'
import { Box } from '~/components/box'
import { FieldWrapper } from '~/components/field-wrapper'
import type { ValidationOptions } from '~/components/form'
import { Icon } from '~/components/icon'
import { Input, InputProps } from '~/components/input'

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
  hidePasswordText = 'Hide password',
  showPasswordText = 'Show password',
  prompt = undefined,
  required = false,
  validation,
  ...remainingProps
}) => {
  const { register, errors } = useFormContext()
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((currentState) => !currentState)

  const ref = validation ? register(validation) : register
  const error = errors[name]?.message

  return (
    <Box css={css}>
      <FieldWrapper
        label={label}
        fieldId={name}
        prompt={prompt}
        css={{ position: 'relative' }}
        error={error}
      >
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          css={{ pr: '$sizes$2' }}
          autoComplete="current-password"
          name={name}
          id={name}
          required={required}
          ref={ref}
          {...remainingProps}
        />
        <ActionIcon
          css={{
            bottom: 0,
            color: '$tonal700',
            position: 'absolute',
            right: 0
          }}
          label={isPasswordVisible ? hidePasswordText : showPasswordText}
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()} // prevent focus being lost from password input
          size="lg"
        >
          <Icon is={isPasswordVisible ? Eye : EyeClosed} />
        </ActionIcon>
      </FieldWrapper>
    </Box>
  )
}

PasswordField.displayName = 'PasswordField'
