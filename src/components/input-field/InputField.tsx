import * as React from 'react'

import { Box } from '~/components/box'
import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { Override } from '~/utilities'

type InputFieldProps = Override<
  InputProps,
  {
    label: string
    error?: string
    required?: boolean
    name: string
  }
>

export const InputField: React.FC<InputFieldProps> = React.forwardRef(
  (
    {
      css = undefined,
      label,
      name,
      error = undefined,
      required = false,
      ...remainingProps
    },
    ref
  ) => (
    <Box css={css}>
      <Label css={{ mb: '$1' }} htmlFor={name}>
        {`${label} ${required ? '*' : ''}`}
      </Label>
      <Input
        css={{ mb: '$1' }}
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
      />
      {error && <ValidationError>{error}</ValidationError>}
    </Box>
  )
)

InputField.displayName = 'InputField'
