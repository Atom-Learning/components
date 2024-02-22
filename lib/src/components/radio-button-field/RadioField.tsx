import * as React from 'react'

import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { RadioButton } from '~/components/radio-button'
import { CSS } from '~/stitches'

type RadioFieldProps = {
  css?: CSS
  defaultChecked?: boolean
  error?: string
  label: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof RadioButton>

export const RadioField = ({
  css,
  label,
  value,
  ...remainingProps
}: RadioFieldProps) => (
  <InlineFieldWrapper css={css} label={label}>
    <RadioButton value={value} {...remainingProps} />
  </InlineFieldWrapper>
)

RadioField.displayName = 'RadioField'
