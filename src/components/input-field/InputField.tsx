import * as React from 'react'

import { Box } from '~/components/box'
import { ValidationOptions } from '~/components/form/ValidationOptions'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { styled } from '~/stitches'

type InputFieldProps = InputProps & {
  label: string
  error?: string
  required?: boolean
  name: string
  register?: React.ForwardedRef<HTMLInputElement>
  validation?: ValidationOptions
}

const RedSpan = styled('span', { color: '$danger' })
const RedAsterisk = () => <RedSpan>*</RedSpan>

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  error = undefined,
  required = false,
  register = null,
  ...remainingProps
}) => {
  console.log('error:', error)
  return (
    <Box css={css}>
      <Label css={{ mb: '$1' }} htmlFor={name}>
        {label}
        {required && <RedAsterisk />}
      </Label>
      <Input
        css={{ mb: '$1' }}
        id={name}
        name={name}
        ref={register}
        {...(error && { state: 'error' })}
        {...remainingProps}
      />
      {error && <ValidationError>{error}</ValidationError>}
    </Box>
  )
}

InputField.displayName = 'InputField'
