import * as React from 'react'

import { Input, Label, ValidationError } from '~/components'
import { CSS } from '~/stitches'
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
