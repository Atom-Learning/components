import * as React from 'react'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

import { Checkbox } from '~/components/checkbox'
import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { CSS } from '~/stitches'

type CheckboxFieldProps = {
  control?: any
  css?: CSS
  error?: string
  label: string
  name: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof Checkbox>

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  control,
  css,
  error,
  label,
  name,
  validation,
  ...remainingProps
}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <InlineFieldWrapper label={label} fieldId={name} css={css} error={error}>
      <Controller
        onChange={() => setIsChecked((current) => !current)}
        control={control}
        name={name}
        defaultValue={isChecked}
        rules={validation}
        render={({ onChange, value, name: innerName, ref }) => (
          <Checkbox
            id={name}
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
        )}
      />
    </InlineFieldWrapper>
  )
}

CheckboxField.displayName = 'CheckboxField'
