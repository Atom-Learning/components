import * as React from 'react'

import { Box } from '~/components/box'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { theme } from '~/stitches'

type InputFieldProps = InputProps & {
  label: string
  error?: string
  required?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  css = undefined,
  label,
  name,
  error = undefined,
  required = false,
  ...remainingProps
}) => (
  <Box css={css}>
    <Label css={{ mb: '$1' }} htmlFor={name}>
      {label}
      {required && <span style={{ color: theme['colors'].danger }}> *</span>}
    </Label>
    <Input
      css={{ mb: '$1', ...(error && { border: '1px solid $danger ' }) }}
      id={name}
      name={name}
      {...remainingProps}
    />
    {error && <ValidationError>{error}</ValidationError>}
  </Box>
)

InputField.displayName = 'InputField'
