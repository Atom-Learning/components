import invariant from 'invariant'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { throttle } from 'throttle-debounce'

import type { CSS } from '~/stitches'
import { Override } from '~/utilities'

import { Box } from '../box'
import { FieldElementWrapperProps } from '../field-wrapper'
import { Flex } from '../flex'
import { InlineMessage } from '../inline-message'
import { PasswordField } from '../password-field'
import { PasswordInput } from '../password-input'

type ValidationResult = Record<string, boolean>

type CreatePasswordFieldProps = Override<
  React.ComponentProps<typeof PasswordInput> & FieldElementWrapperProps,
  {
    label?: string
    name?: string
    validate: (
      password: string
    ) => Promise<ValidationResult | undefined> | ValidationResult
    defaultValidation: ValidationResult
    messageDirection?: CSS['flexDirection']
  }
>

export const CreatePasswordField = ({
  validate,
  defaultValidation,
  messageDirection = 'row',
  label = 'Create a password',
  name = 'password',
  css,
  validation,
  ...remainingProps
}: CreatePasswordFieldProps) => {
  const { formState } = useFormContext()
  const [isFocused, setIsFocused] = React.useState<boolean>(false)
  const [validationResult, setValidationResult] =
    React.useState<ValidationResult>(defaultValidation)

  const touched = formState.touched[name]
  const error = formState.errors[name]?.type === 'validate'

  const validatePassword = React.useCallback(
    async (password: string) => {
      const result = await validate(password)

      if (result) {
        invariant(
          typeof result === 'object',
          'The validate function must return an object'
        )

        setValidationResult(result)
        return Object.values(result).every((isValid) => isValid)
      }

      return false
    },
    [setValidationResult]
  )

  const handleChange = React.useCallback(throttle(500, validatePassword), [
    validatePassword
  ])

  const getMessageTheme = (result: boolean, isFocused: boolean) => {
    if (result) return 'success'

    return isFocused ? 'neutral' : 'error'
  }

  return (
    <Flex direction="column" gap="2" css={css}>
      <PasswordField
        label={label}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        validation={{ ...validation, validate: validatePassword }}
        {...remainingProps}
      />
      {(touched || isFocused || error) && (
        <Flex wrap="wrap" direction="column" gap="2">
          {Object.entries(validationResult).map(([message, result]) => (
            <InlineMessage
              key={message}
              theme={getMessageTheme(result, isFocused)}
            >
              {message}
            </InlineMessage>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

CreatePasswordField.displayName = 'CreatePasswordField'
