import { useState, useEffect } from 'react'
import get from 'lodash.get'
import { useFormContext } from 'react-hook-form'

export const useFieldError = (fieldName: string) => {
  const [error, setError] = useState<string | undefined>(undefined)
  const { errors } = useFormContext()

  const getErrors = () => get(errors, fieldName)
  const currentFieldError = getErrors()

  useEffect(() => {
    if (currentFieldError) {
      setError(currentFieldError.message)
    } else {
      setError(undefined)
    }
  }, [currentFieldError])

  return {
    error
  }
}
