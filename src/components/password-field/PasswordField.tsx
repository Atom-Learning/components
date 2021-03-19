import * as React from 'react'
import { useState } from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Eye, EyeOff, Icon } from '~/components/icon'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { Link } from '~/components/link'
import { ValidationError } from '~/components/validation-error'
import { styled } from '~/stitches'

import { ValidationOptions } from '../form'

type Prompt = {
  label: string
  link: string
}

type PasswordFieldProps = InputProps & {
  label?: string
  prompt?: Prompt
  hidePasswordText?: string
  showPasswordText?: string
  register?: (
    validation: ValidationOptions
  ) => React.ForwardedRef<HTMLInputElement>
  error?: string
  required?: boolean
  validation?: ValidationOptions
}

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
            is={isPasswordVisible ? Eye : EyeOff}
          />
        </InvisibleButton>
      </Box>
      {error && <ValidationError css={{ mt: '$2' }}>{error}</ValidationError>}
    </Box>
  )
}

PasswordField.displayName = 'PasswordField'

const InvisibleButton = styled('button', {
  border: 'none',
  padding: 0,
  background: 'none',
  cursor: 'pointer',
  position: 'absolute',
  bottom: 0,
  right: 0,
  size: '$2'
})
