import * as React from 'react'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { RadioButton } from '~/components/radio'
import { CSS } from '~/stitches'

type RadioFieldProps = {
  css?: CSS
  error?: string
  label: string
  name: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof RadioButton>

export const RadioField: React.FC<RadioFieldProps> = ({
  css,
  label,
  name,
  validation,
  ...remainingProps
}) => {
  const { control } = useFormContext()
  const [isChecked, setIsChecked] = useState(false)

  // each radio in the group has the same name, so we can't use them
  // as unique IDs
  const id = `${name}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`
  return (
    <InlineFieldWrapper css={css} label={label} fieldId={id}>
      {/* <RadioButton id={id} name={name} {...remainingProps} /> */}
      <Controller
        onChange={() => setIsChecked((current) => !current)}
        control={control}
        name={name}
        defaultValue={isChecked}
        rules={validation}
        render={({ onChange, value, name: innerName }) => (
          <RadioButton
            id={name}
            name={innerName}
            onCheckedChange={() => {
              setIsChecked((current) => {
                onChange(!current)
                return !current
              })
            }}
            {...remainingProps}
            value={value}
          />
        )}
      />
    </InlineFieldWrapper>
  )
}

RadioField.displayName = 'RadioField'
