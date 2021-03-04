import * as React from 'react'
import { useForm } from 'react-hook-form'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { ValidationError } from './validation'

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
    defaultValues,
    mode: 'onBlur'
  })

  return (
    <StyledForm
      {...remainingProps}
      onSubmit={handleSubmit(onSubmit)}
      aria-label="form"
    >
      {React.Children.map(children, (child: React.ReactElement) => {
        const { name, validation } = child.props

        // Form fields require a name
        // If there is no name, assume it's not a form field
        if (!name) return child

        const fieldError = errors[name] as ValidationError
        return React.createElement(child.type, {
          ...{
            ...child.props,
            error: fieldError ? fieldError.message : undefined,
            register: validation ? register(validation) : register,
            key: name,
            required: validation ? validation.required : false
          }
        })
      })}
    </StyledForm>
  )
}

Form.displayName = 'Form'
