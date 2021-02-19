import * as React from 'react'

import { Input } from '~/components/input'
import { Label } from '~/components/label'
import { ValidationError } from '~/components/validation-error'
import { CSSWrapper, Override } from '~/utilities'

type InputFieldProps = Override<
  React.ComponentPropsWithoutRef<typeof Input>,
  {
    label: string
    error?: string
  }
>

export const InputField: React.FC<InputFieldProps> = ({
  css,
  label,
  name,
  error,
  ...remainingProps
}: InputFieldProps) => {
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
