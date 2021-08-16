import delve from 'dlv'
import { useFormContext } from 'react-hook-form'

export const useFieldError = (fieldName: string) => {
  const { errors } = useFormContext()

  // in case of migration to a newer version of react-hook-form the path needs to updated to account for dynamic fields naming convention
  const fieldPath = fieldName.split(/[,[\].]+?/).filter(Boolean)

  const getErrors = () => delve(errors, fieldPath)

  return {
    error: getErrors()?.message
  }
}
