import * as React from 'react'

import { FieldWrapper } from '~/components/field-wrapper'
import { RadioButtonGroup } from '~/components/radio-button-group'

type TRadioButtonGroupFieldProps = React.ComponentProps<typeof RadioButtonGroup> & React.ComponentProps<typeof FieldWrapper>

const RadioButtonGroupFieldRoot = React.forwardRef<HTMLElement, TRadioButtonGroupFieldProps>(({
  name,
  label,
  prompt,
  required,
  feedback,
  description,
  hideLabel,
  css,
  ...rest
}, ref) => {
  const wrapperProps = {
    name,
    label,
    prompt,
    required,
    feedback,
    description,
    hideLabel,
    css
  }
  return (
    <FieldWrapper ref={ref} type="fieldset" {...wrapperProps} >
      <RadioButtonGroup {...rest} />
    </FieldWrapper>
  )
})

export const RadioButtonGroupField = RadioButtonGroupFieldRoot as typeof RadioButtonGroupFieldRoot & {
  Item: typeof RadioButtonGroup.Item
}

RadioButtonGroupField.Item = RadioButtonGroup.Item

RadioButtonGroupField.displayName = 'RadioButtonGroupField'
