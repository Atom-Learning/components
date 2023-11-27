import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { FieldElementWrapperProps } from '~/components/field-wrapper'
import { Description as FieldDescription } from '~/components/field-wrapper/FieldDescription'
import { Flex } from '~/components/flex'
import { useFieldError } from '~/components/form'
import { InlineMessage } from '~/components/inline-message'
import { Label } from '~/components/label'
import { RadioButtonGroup } from '~/components/radio-button'
import { styled } from '~/stitches'

import { RadioField } from './RadioField'

const Fieldset = styled('fieldset', {
  all: 'unset'
})

type RadioButtonFieldProps = React.ComponentProps<typeof RadioButtonGroup> &
  FieldElementWrapperProps

export const RadioButtonField: React.FC<RadioButtonFieldProps> & {
  Item: typeof RadioField
} = ({
  children,
  css,
  direction = 'column',
  defaultValue,
  value,
  description,
  label,
  name,
  validation,
  onValueChange,
  ...remainingProps
}) => {
  const { control } = useFormContext()
  const {
    field: { ref, onChange, value: innerValue, name: innerName }
  } = useController({
    name,
    control,
    rules: validation,
    defaultValue
  })
  const { error } = useFieldError(name)

  React.useEffect(() => {
    // Update the react-hook-form inner value to match what is passed in.
    if (typeof value !== 'undefined') onChange(value)
  }, [value])

  return (
    <Fieldset css={css}>
      <Flex direction="column" gap="3">
        <Label
          as="legend"
          css={{ p: 0 }}
          required={Boolean(validation?.required)}
        >
          {label}
        </Label>
        {description && <FieldDescription>{description}</FieldDescription>}

        <RadioButtonGroup
          ref={ref}
          direction={direction}
          defaultValue={defaultValue}
          onValueChange={(newValue) => {
            onChange(newValue)
            onValueChange?.(newValue)
          }}
          value={innerValue}
          {...remainingProps}
        >
          {children}
        </RadioButtonGroup>

        {error && <InlineMessage>{error}</InlineMessage>}
      </Flex>
    </Fieldset>
  )
}

RadioButtonField.Item = RadioField

RadioButtonField.displayName = 'RadioButtonField'
