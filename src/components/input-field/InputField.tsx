import * as React from 'react'

import { Box } from '~/components/box'
import { ValidationOptions } from '~/components/form/validation'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'

type InputFieldProps = InputProps & {
  label: string
  error?: string
  required?: boolean
  name: string
  register?: React.ForwardedRef<HTMLInputElement>
  validation?: ValidationOptions
}

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
    <Label css={{ mb: '$2' }} htmlFor={name} required={required}>
      {label}
    </Label>
    <Input
      id={name}
      name={name}
      ref={register}
      {...(error && { state: 'error' })}
      {...remainingProps}
    />
    {error && <ValidationError css={{ mt: '$1' }}>{error}</ValidationError>}
  </Box>
)

InputField.displayName = 'InputField'
