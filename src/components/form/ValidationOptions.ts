// Returns `true` if a value passes validation, or a string with the error if not
type Validator = (value: any) => boolean | string

// Processes a value after validation
type Processor = (value: any) => any

type Option =
  | string
  | {
      value: boolean
      message: string
    }

type PatternOption = { value: RegExp; message: string }

export type ValidationOptions = {
  required?: Option
  min?: Option
  max?: Option
  minLength?: Option
  maxLength?: Option
  pattern?: PatternOption
  validate?: Validator | { [key: string]: Validator }
  valueAsNumber?: boolean
  valueAsDate?: boolean
  setValueAs?: Processor
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
