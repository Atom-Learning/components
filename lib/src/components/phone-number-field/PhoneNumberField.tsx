import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

import { FieldElementWrapperProps, FieldWrapper } from '../field-wrapper'
import { useFieldError } from '../form'
import { PhoneNumberInput, FALLBACK_COUNTRY } from '../phone-number-input'

type PhoneNumberFieldProps = React.ComponentProps<typeof PhoneNumberInput> &
  FieldElementWrapperProps & {
    copy?: {
      validation_invalid_phone_number?: string
    }
  }

const defaultCopy = {
  validation_invalid_phone_number: 'Please enter a valid phone number'
}

export const PhoneNumberField = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  hideLabel,
  defaultValue,
  value,
  copy,
  onChange: onChangeProps,
  required,
  ...remainingProps
}: PhoneNumberFieldProps) => {
  const isRequired = required || Boolean(validation?.required)
  const { control } = useFormContext()
  const { error } = useFieldError(name)
  const {
    field: { ref, onChange, value: innerValue, name: innerName }
  } = useController({
    name,
    control,
    rules: {
      ...(validation || {}),
      validate: {
        checkIsValidPhoneNumber: (v) =>
          (!isRequired && !v) ||
          isValidPhoneNumber(v) ||
          copyMerged.validation_invalid_phone_number,
        ...(validation?.validate || {})
      }
    },
    defaultValue: defaultValue
      ? parsePhoneNumber(defaultValue, FALLBACK_COUNTRY)?.number
      : undefined
  })

  React.useEffect(() => {
    // Update the react-hook-form inner value to match what is passed in.
    if (typeof value !== 'undefined')
      onChange(parsePhoneNumber(value, FALLBACK_COUNTRY)?.number)
  }, [value])

  const copyMerged = { ...defaultCopy, ...copy }
  return (
    <FieldWrapper
      fieldId={name}
      label={label}
      description={description}
      error={error}
      hideLabel={hideLabel}
      prompt={prompt}
      required={isRequired}
    >
      <PhoneNumberInput
        ref={ref}
        name={innerName}
        required={required}
        {...remainingProps}
        onChange={(newValue) => {
          onChange(newValue)
          onChangeProps?.(newValue)
        }}
        value={innerValue}
        {...(error && { state: 'error' })}
      />
    </FieldWrapper>
  )
}

PhoneNumberField.displayName = 'PhoneNumberField'
