import * as React from 'react'
import delve from 'dlv'
import { useFormContext } from 'react-hook-form'

export const useFieldError = (
  fieldName: string,
  validationMode: 'firstError' | 'all' = 'firstError'
) => {
  const { errors } = useFormContext()

  const fieldErrors = getFieldErrors(errors, fieldName, validationMode)

  return fieldErrors
}

const getFieldErrors = (
  errors,
  fieldName,
  validationMode
): Array<string> | null => {
  // in case of migration to a newer version of react-hook-form the path needs to updated to account for dynamic fields naming convention
  const fieldPath = fieldName.split(/[,[\].]+?/).filter(Boolean)

  // const getErrors = () => delve(errors, fieldPath)
  const error = delve(errors, fieldPath)

  // `message` is the first validation error, as prioritised by react-hook-form.
  // `types` is an object containing all current validation errors, keyed by the validation type
  const { message, types } = error || {}

  if (!types && !message) return null

  if (validationMode === 'firstError' && message) return [message]

  return Object.values(types)
}
