import * as React from 'react'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox } from '~/components/checkbox'
import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { CSS } from '~/stitches'

type CheckboxFieldProps = {
  css?: CSS
  label: string
  description?: string
  name: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof Checkbox>

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  css,
  label,
  name,
  validation,
  description,
  ...remainingProps
}) => {
  const { control, errors } = useFormContext()
  const [isChecked, setIsChecked] = useState(false)

  const error = errors[name]?.message

  return (
    <Controller
      onChange={() => setIsChecked((current) => !current)}
      control={control}
      name={name}
      defaultValue={isChecked}
      rules={{ required: true }}
      render={({ onChange, value, name: innerName }) => (
        <InlineFieldWrapper
          css={css}
          description={description}
          error={error}
          label={label}
        >
          <Checkbox
            name={innerName}
            onCheckedChange={() => {
              setIsChecked((current) => {
                onChange(!current)
                return !current
              })
            }}
            value={value}
            {...remainingProps}
          />
        </InlineFieldWrapper>
      )}
    />
  )
}

CheckboxField.displayName = 'CheckboxField'
