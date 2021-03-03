import * as React from 'react'
import { useForm } from 'react-hook-form'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { ValidationError, ValidationOptions } from './ValidationOptions'

const StyledForm = styled('form', {})

type FormProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    defaultValues?: { [key: string]: string | number }
    onSubmit: (data: any) => void
  }
>

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  ...remainingProps
}) => {
  const { errors, handleSubmit, register } = useForm({
    defaultValues
  })

  return (
    <StyledForm {...remainingProps} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: React.ReactElement) => {
        const { name } = child.props

        if (!name) return child

        const fieldError = errors[name] as ValidationError
        return React.createElement(child.type, {
          ...{
            ...child.props,
            error: fieldError
              ? getError(fieldError, child.props.validation)
              : undefined,
            register: child.props.validation
              ? register(child.props.validation)
              : register,
            key: name
          }
        })
      })}
    </StyledForm>
  )
}

Form.displayName = 'Form'

const getError = (
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
