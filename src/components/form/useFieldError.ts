import { useState, useEffect } from 'react'
import delve from 'dlv'
import { useFormContext } from 'react-hook-form'

export const useFieldError = (fieldName: string) => {
  const [error, setError] = useState<string | undefined>(undefined)
  const { errors } = useFormContext()

  const fieldPath = fieldName.split(/[,[\].]+?/).filter(Boolean)

  const getErrors = () => delve(errors, fieldPath)
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
