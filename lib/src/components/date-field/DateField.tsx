import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { DateInput, DateInputProps } from '~/components/date-input'
import {
  FieldWrapper,
  FieldElementWrapperProps
} from '~/components/field-wrapper'
import { useFieldError } from '~/components/form'

type DateFieldProps = DateInputProps & FieldElementWrapperProps

export const DateField: React.FC<DateFieldProps> = ({
  css,
  label,
  name,
  validation,
  prompt,
  description,
  feedbackMode,
  ...remainingProps
}) => {
  const { register, trigger } = useFormContext()
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
      feedbackMode={feedbackMode}
    >
      <DateInput
        id={name}
        name={name}
        ref={ref}
        {...(error && { state: 'error' })}
        {...remainingProps}
        revalidate={trigger}
      />
    </FieldWrapper>
  )
}

DateField.displayName = 'DateField'
