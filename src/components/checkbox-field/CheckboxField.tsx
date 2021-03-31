import * as React from 'react'

import { Box } from '~/components/box'
import { Checkbox } from '~/components/checkbox'
import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { CSS } from '~/stitches'

type CheckboxFieldProps = {
  css?: CSS
  error?: string
  label: string
  name: string

  register?: (
    validation: ValidationOptions
  ) => React.ForwardedRef<HTMLInputElement>
  validation?: ValidationOptions
} & React.ComponentProps<typeof Checkbox>

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  css,
  error,
  label,
  name,
  register,
  validation,
  ...remainingProps
}) => {
  let ref
  if (register && validation) {
    ref = register(validation)
  } else if (register) {
    ref = register
  }
  return (
    <InlineFieldWrapper label={label} fieldId={name} css={css} error={error}>
      <Checkbox id={name} name={name} ref={ref} {...remainingProps} />
    </InlineFieldWrapper>
  )
}

CheckboxField.displayName = 'CheckboxField'
