// Returns `true` if a value passes validation, or a string with the error if not
type Validator = (value: any) => boolean | string

// Processes a value after validation
type Processor = (value: any) => any

type Option<T> = {
  value: T
  message: string
}

export type ValidationOptions = {
  required?: Option<boolean> | string
  min?: Option<number>
  max?: Option<number>
  minLength?: Option<number>
  maxLength?: Option<number>
  pattern?: Option<RegExp>
  validate?: Validator | { [key: string]: Validator }
  valueAsNumber?: boolean
  valueAsDate?: boolean
  process?: Processor
}

export type ValidationError = {
  message: string
  type:
    | 'required'
    | 'min'
    | 'max'
    | 'minLength'
    | 'maxLength'
    | 'pattern'
    | 'validate'
}

export const getErrorMessage = (
  error: ValidationError,
  validationOptions: ValidationOptions
): string => {
  console.log('error in getError:', error)
  if (error.message) return error.message

  switch (error.type) {
    case 'required':
      return 'This field is required'
    case 'max':
      return `The maximum allowed value is ${validationOptions.max}`
    case 'maxLength':
      return `The maximum allowed length is ${validationOptions.maxLength}`
    case 'min':
      return `The minimum allowed value is ${validationOptions.min}`
    case 'minLength':
      return `The minimum allowed length is ${validationOptions.minLength}`

    default:
      return 'There is an error with this field'
  }
}
