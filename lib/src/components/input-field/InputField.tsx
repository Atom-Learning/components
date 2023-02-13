import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FieldElementWrapperProps,
  FieldWrapper,
  useFieldMessages
} from '~/components/field-wrapper'
import { Input, InputProps } from '~/components/input'
import { useFieldError } from '../form'

type InputFieldProps = InputProps & FieldElementWrapperProps

export const InputField: React.FC<InputFieldProps> = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  feedbackMode,
  // required,
  ...remainingProps
}) => {
  const { register } = useFormContext()
  const { error } = useFieldError(name)
  const ref = validation ? register(validation) : register

  return (
    <FieldWrapper
      css={css}
      description={description}
      fieldId={name}
      label={label}
      prompt={prompt}
      required={Boolean(validation?.required)}
      // required={Boolean(validation?.required || required)}
      feedbackMode={feedbackMode}
    >
      <Input
        id={name}
        name={name}
        ref={ref}
        {...(error && {
          state: 'error'
        })}
        {...remainingProps}
      />
    </FieldWrapper>
  )
}

InputField.displayName = 'InputField'
