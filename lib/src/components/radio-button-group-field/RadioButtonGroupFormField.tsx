import * as React from 'react'

import { FormFieldWrapper } from '~/components/field-wrapper'
import { RadioButtonGroup } from '~/components/radio-button-group'

type TRadioButtonGroupFieldProps = React.ComponentProps<typeof RadioButtonGroup> & React.ComponentProps<typeof FormFieldWrapper>

const RadioButtonGroupFormFieldRoot = React.forwardRef<HTMLElement, TRadioButtonGroupFieldProps>(({
  name,
  label,
  value,
  defaultValue,
  prompt,
  required,
  feedback,
  description,
  hideLabel,
  css,
  validation,
  ...rest
}, ref) => {
  const wrapperProps = {
    name,
    label,
    value,
    defaultValue,
    prompt,
    required,
    feedback,
    description,
    hideLabel,
    css,
    validation,
  }

  return (
    <FormFieldWrapper ref={ref} type="fieldset" {...wrapperProps}>
      <RadioButtonGroup {...rest} />
    </FormFieldWrapper>
  )
})

export const RadioButtonGroupFormField = RadioButtonGroupFormFieldRoot as typeof RadioButtonGroupFormFieldRoot & {
  Item: typeof RadioButtonGroup.Item
}

RadioButtonGroupFormField.Item = RadioButtonGroup.Item

RadioButtonGroupFormField.displayName = 'RadioButtonGroupFormField'
