import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Checkbox } from '~/components/checkbox'
import {
  FieldElementWrapperProps,
  InlineFieldWrapper
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'

type CheckboxFieldProps = React.ComponentProps<typeof Checkbox> &
  FieldElementWrapperProps

enum CheckboxValue {
  ON = 'on',
  OFF = 'off'
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  css,
  label,
  name,
  validation,
  description,
  defaultChecked = false,
  checked,
  ...remainingProps
}) => {
  const { control } = useFormContext()
  const { error } = useFieldError(name)
  const {
    field: { ref, onChange, value: innerChecked, name: innerName }
  } = useController({
    name,
    control,
    rules: validation,
    defaultValue: defaultChecked
  })

  React.useEffect(() => {
    // Update the react-hook-form inner checked to match what is passed in.
    if (typeof checked !== 'undefined') onChange(checked)
  }, [checked])

  return (
    <InlineFieldWrapper
      css={css}
      description={description}
      error={error}
      label={label}
      required={Boolean(validation?.required)}
    >
      <Checkbox
        ref={ref}
        name={innerName}
        {...remainingProps}
        onCheckedChange={onChange}
        value={innerChecked ? CheckboxValue.ON : CheckboxValue.OFF}
        checked={innerChecked}
        {...(error && { state: 'error' })}
      />
    </InlineFieldWrapper>
  )
}

CheckboxField.displayName = 'CheckboxField'
