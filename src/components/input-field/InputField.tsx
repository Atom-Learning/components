import * as React from 'react'

import { Input, InputProps } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { CSSWrapper } from '~/utilities'

type InputFieldProps = InputProps & {
  label: string
  error?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  css,
  label,
  name,
  error,
  ...remainingProps
}) => {
  return (
    <CSSWrapper css={css}>
      <Label css={{ mb: '$1' }} htmlFor={name}>
        {label}
      </Label>
      <Input css={{ mb: '$1' }} id={name} name={name} {...remainingProps} />
      <ValidationError>{error}</ValidationError>
    </CSSWrapper>
  )
}

InputField.displayName = 'InputField'
