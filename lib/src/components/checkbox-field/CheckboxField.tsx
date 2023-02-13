import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

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
  defaultChecked = false,
  label,
  name,
  validation,
  description,
  ...remainingProps
}) => {
  const { control } = useFormContext()
  const { error } = useFieldError(name)

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultChecked}
      rules={validation}
      render={({ onChange, value, name: innerName }) => (
        <InlineFieldWrapper
          css={css}
          description={description}
          error={error}
          label={label}
          required={Boolean(validation?.required)}
        >
          <Checkbox
            defaultChecked={defaultChecked}
            defaultValue={defaultChecked ? CheckboxValue.ON : CheckboxValue.OFF}
            checked={value}
            name={innerName}
            onCheckedChange={onChange}
            value={value ? CheckboxValue.ON : CheckboxValue.OFF}
            {...(error && { state: 'error' })}
            {...remainingProps}
          />
        </InlineFieldWrapper>
      )}
    />
  )
}

CheckboxField.displayName = 'CheckboxField'
