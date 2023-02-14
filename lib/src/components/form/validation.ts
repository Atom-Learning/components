export type ValidationOptions = {
  required?: Option<boolean> | string
  min?: Option<number>
  max?: Option<number>
  criteriaMode?: 'all' | 'firstError'
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

// Returns `true` if a value passes validation, or a string with the error if not
type Validator = (value: any) => boolean | string

// Processes a value after validation
type Processor = (value: any) => any

type Option<T> = {
  value: T
  message: string
}
