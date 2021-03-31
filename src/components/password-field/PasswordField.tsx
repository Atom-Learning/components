import { Eye, EyeClosed } from '@atom-learning/icons'
import * as React from 'react'
import { useState } from 'react'

import { Box } from '~/components/box'
import { FieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { Icon } from '~/components/icon'
import { Input, InputProps } from '~/components/input'
import { styled } from '~/stitches'

type PasswordFieldProps = InputProps & {
  label?: string
  prompt?: {
    label: string
    link: string
  }
  hidePasswordText?: string
  showPasswordText?: string
  register?: (
    validation: ValidationOptions
  ) => React.ForwardedRef<HTMLInputElement>
  error?: string
  required?: boolean
  validation?: ValidationOptions
}

const InvisibleButton = styled('button', {
  background: 'none',
  border: 'none',
  bottom: 0,
  cursor: 'pointer',
  p: 0,
  position: 'absolute',
  right: 0,
  size: '$4'
})

export const PasswordField: React.FC<PasswordFieldProps> = ({
  css = {},
  error = '',
  label = 'Password',
  name,
  hidePasswordText = 'Hide password',
  showPasswordText = 'Show password',
  prompt = undefined,
  required = false,
  register = undefined,
  validation,
  ...remainingProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((currentState) => !currentState)

  let ref
  if (register && validation) {
    ref = register(validation)
  } else if (register) {
    ref = register
  }

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
        <InvisibleButton
          aria-label={isPasswordVisible ? hidePasswordText : showPasswordText}
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()} // prevent focus being lost from password input
          type="button"
        >
          <Icon
            css={{ color: '$tonal700' }}
            is={isPasswordVisible ? Eye : EyeClosed}
          />
        </InvisibleButton>
      </FieldWrapper>
    </Box>
  )
}

PasswordField.displayName = 'PasswordField'
