import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox } from '~/components/checkbox'
import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { CSS } from '~/stitches'
import { getErrors } from '~/utilities'

type CheckboxFieldProps = {
  css?: CSS
  defaultChecked?: boolean
  label: string
  description?: string
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
  description,
  ...remainingProps
}) => {
  const { control, errors } = useFormContext()

  const error = getErrors(errors, name)

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
          error={error?.message}
          label={label}
          required={required}
        >
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
        </InlineFieldWrapper>
      )}
    />
  )
}

CheckboxField.displayName = 'CheckboxField'
