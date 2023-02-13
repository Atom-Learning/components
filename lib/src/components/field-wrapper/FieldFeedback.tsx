import * as React from 'react'

import { get, useFormContext } from 'react-hook-form'
import { InlineMessage } from '../inline-message'
import { Stack } from '../stack'

type IFieldFeedbackProps = React.ComponentProps<typeof Stack> & {
  fieldName: string
  direction?: 'column' | 'row'
  /// @default 'firstError'
  /// @description 'firstError' will only show the first error message, as prioritised by react-hook-form, whereas 'all' will show all error messages
  validationMode?: 'firstError' | 'all'
}

export const FieldFeedback: React.FC<IFieldFeedbackProps> = ({
  fieldName,
  direction = 'column',
  validationMode = 'firstError',
  ...rest
}) => {
  const { errors } = useFormContext()
  const error = get(errors, fieldName)

  // `message` is the first validation error, as prioritised by react-hook-form.
  // `types` is an object containing all current validation errors, keyed by the validation type
  const { message, types } = error || {}

  if (!types) return null

  // For some reason, some errors generate a type but no message in
  // firstError mode, so we need to check for that
  if (validationMode === 'firstError' && message) {
    // TODO: this doesn't need to be a Stack yet because there's only one item,
    // but we'll need the Stack when we add custom field messages
    // and changing it to a Box now complicates the prop type on this component
    return (
      <Stack gap="3" direction={direction} {...rest}>
        <InlineMessage theme="error">{message}</InlineMessage>
      </Stack>
    )
  }

  return (
    <Stack gap="3" direction={direction} {...rest}>
      {Object.values(types as Record<string, string>).map((error) => {
        return (
          <InlineMessage theme="error" key={error}>
            {error}
          </InlineMessage>
        )
      })}
    </Stack>
  )
}
