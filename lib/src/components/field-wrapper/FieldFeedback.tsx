import * as React from 'react'

import { InlineMessage } from '../inline-message'
import { InlineMessageTheme } from '../inline-message/InlineMessage.types'
import { Stack } from '../stack'
import { useFieldMessages, FieldWrapperMessages } from './useFieldMessages'
type FieldFeedbackProps = Omit<
  React.ComponentProps<typeof Stack>,
  'direction'
> & {
  fieldName: string
  direction?: 'column' | 'row'
  /// @default 'firstError'
  /// @description 'firstError' will only show the first error message, as prioritised by react-hook-form, whereas 'all' will show all error messages
  validationMode?: 'firstError' | 'all'
  messages?: FieldWrapperMessages
}

export const FieldFeedback: React.FC<FieldFeedbackProps> = ({
  fieldName,
  direction = 'column',
  validationMode = 'firstError',
  messages,
  ...rest
}) => {
  const { messages: fieldMessages } = useFieldMessages(
    fieldName,
    messages || [],
    validationMode
  )

  if (!fieldMessages?.length) return null

  return (
    <Stack gap="3" direction={direction} {...rest}>
      {fieldMessages.map(({ text, theme }) => {
        return (
          <InlineMessage theme={theme} key={text}>
            {text}
          </InlineMessage>
        )
      })}
    </Stack>
  )
}
