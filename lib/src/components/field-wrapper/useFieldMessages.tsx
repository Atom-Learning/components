import * as React from 'react'
import { useFieldError } from '~/components/form'

import { FieldWrapperMessages } from './FieldWrapper'

type FieldMessageData = {
  messages: FieldWrapperMessages
  hasError: boolean
}
export const useFieldMessages = (
  fieldName: string,
  messages: FieldWrapperMessages
): FieldMessageData => {
  const { error } = useFieldError(fieldName)

  const [fieldMessages, setFieldMessages] =
    React.useState<FieldWrapperMessages>(messages)
  const [hasError, setHasError] = React.useState<boolean>(
    messages?.messages?.some((m) => m.theme === 'error') || false
  )

  React.useEffect(() => {
    if (error) {
      setFieldMessages({
        ...messages,
        messages: messages?.messages?.length
          ? [{ text: error, theme: 'error' }, ...messages?.messages]
          : [{ text: error, theme: 'error' }]
      })
    } else {
      setFieldMessages(messages)
    }
  }, [messages, error])

  React.useEffect(() => {
    if (fieldMessages?.messages?.some((m) => m.theme === 'error')) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [fieldMessages])

  return { messages: fieldMessages, hasError }
}
