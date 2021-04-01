import * as React from 'react'

import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { RadioButton } from '~/components/radio'
import { CSS } from '~/stitches'

type RadioFieldProps = {
  css?: CSS
  defaultChecked?: boolean
  error?: string
  label: string
  name: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof RadioButton>

export const RadioField: React.FC<RadioFieldProps> = ({
  css,
  label,
  name,
  ...remainingProps
}) => {
  // each radio in the group has the same name, so we can't use them
  // as unique IDs
  const id = `${name}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`
  return (
    <InlineFieldWrapper css={css} label={label} fieldId={id}>
      <RadioButton id={id} name={name} {...remainingProps} />
    </InlineFieldWrapper>
  )
}

RadioField.displayName = 'RadioField'
