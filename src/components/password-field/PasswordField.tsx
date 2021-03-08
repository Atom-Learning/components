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

type Prompt = {
  label: string
  link: string
}

type PasswordFieldProps = InputProps & {
  label?: string
  prompt?: Prompt
  hidePasswordText?: string
  showPasswordText?: string
  register?: React.ForwardedRef<HTMLInputElement>
  error?: string
  required?: boolean
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
  ...remainingProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const togglePasswordVisibility = () =>
    setIsPasswordVisible((currentState) => !currentState)

  return (
    <Box css={{ position: 'relative', ...(css as any) }}>
      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '$1',
          fontFamily: 'sans',
          fontSize: 'sm'
        }}
      >
        {/* TODO: standardise asterisk -- should this be an option in the Label component? */}
        <Label htmlFor={name}>{`${label} ${required ? '*' : ''}`}</Label>
        {prompt && (
          <Link href={prompt.link} css={{ fontSize: '$sm' }}>
            {prompt.label}
          </Link>
        )}
      </Flex>

      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        css={{ mb: '$1', paddingRight: 24 }}
        autoComplete="current-password"
        name={name}
        id={name}
        required={required}
        ref={register}
        {...remainingProps}
      />
      <InvisibleButton
        onClick={togglePasswordVisibility}
        aria-label={isPasswordVisible ? hidePasswordText : showPasswordText}
      >
        <Icon is={isPasswordVisible ? Eye : EyeOff} />
      </InvisibleButton>
      {error && <ValidationError>{error}</ValidationError>}
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
  bottom: 16,
  right: 8
})
