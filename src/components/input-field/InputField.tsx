import * as React from 'react'

import { Box } from '~/components/box'
import { ValidationOptions } from '~/components/form/validation'
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

const StyledAsteriskWrapper = styled('span', { color: '$danger' })
const StyledAsterisk = () => <StyledAsteriskWrapper>*</StyledAsteriskWrapper>

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  error = undefined,
  required = false,
  register = null,
  ...remainingProps
}) => (
  <Box css={css}>
    <Label css={{ mb: '$2' }} htmlFor={name}>
      {label}
      {required && <StyledAsterisk />}
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

InputField.displayName = 'InputField'
