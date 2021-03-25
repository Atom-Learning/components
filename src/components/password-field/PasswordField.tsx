import { Eye, EyeClosed } from '@atom-learning/icons'
import * as React from 'react'
import { useState } from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { ValidationOptions } from '~/components/form'
import { Icon } from '~/components/icon'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import { ValidationError } from '~/components/validation-error'
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
  name = 'password',
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
    <Box css={{ position: 'relative', ...(css as any) }}>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '$2'
        }}
      >
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
        {prompt && (
          <Link href={prompt.link} size="sm">
            {prompt.label}
          </Link>
        )}
      </Flex>

      <Box css={{ position: 'relative' }}>
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
      </Box>
      {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
    </Box>
  )
}

PasswordField.displayName = 'PasswordField'
