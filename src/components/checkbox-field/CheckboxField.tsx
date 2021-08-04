import * as React from 'react'
import { Controller, useFormContext, get } from 'react-hook-form'

import { Checkbox } from '~/components/checkbox'
import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { CSS } from '~/stitches'

type CheckboxFieldProps = {
  css?: CSS
  defaultChecked?: boolean
  label: string
  name: string
  required?: boolean
  validation?: ValidationOptions
} & React.ComponentProps<typeof Checkbox>

enum CheckboxValue {
  ON = 'on',
  OFF = 'off'
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  css,
  defaultChecked = false,
  label,
  name,
  required = false,
  validation,
  ...remainingProps
}) => {
  const { control, errors } = useFormContext()

  const error = get(errors, name)

  return (
    <InlineFieldWrapper
      label={label}
      css={css}
      error={error?.message}
      required={required}
    >
      <Controller
        control={control}
        name={name}
        defaultValue={defaultChecked}
        rules={validation}
        render={({ onChange, value, name: innerName }) => (
          <Checkbox
            defaultChecked={defaultChecked}
            defaultValue={defaultChecked ? CheckboxValue.ON : CheckboxValue.OFF}
            checked={value}
            name={innerName}
            onCheckedChange={(event) => {
              onChange(event.target.value !== CheckboxValue.ON)
            }}
            value={value ? CheckboxValue.ON : CheckboxValue.OFF}
            {...remainingProps}
          />
        )}
      />
    </InlineFieldWrapper>
  )
}

CheckboxField.displayName = 'CheckboxField'
