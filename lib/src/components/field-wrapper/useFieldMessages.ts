import { useFieldError } from '../form'
import { InlineMessageTheme } from '../inline-message/InlineMessage.types'

export type FieldWrapperMessages = Array<{
  theme: InlineMessageTheme
  text: string
}>

type FieldMessageData = {
  messages: FieldWrapperMessages
  hasError: boolean
}
export const useFieldMessages = (
  fieldName: string,
  messages?: FieldWrapperMessages,
  criteriaMode: 'firstError' | 'all' = 'firstError'
): FieldMessageData => {
  const errors = useFieldError(fieldName, criteriaMode)
  console.log('messages:', messages)
  console.log('errors:', errors)
  const errorMessages = errors?.map((error) => ({
    text: error,
    theme: 'error' as InlineMessageTheme
  }))

  return {
    messages: [...(errorMessages || []), ...(messages || [])],
    hasError: !!errorMessages?.length
  }
}
