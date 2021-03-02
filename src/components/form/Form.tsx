import * as React from 'react'
import { useForm } from 'react-hook-form'

import { styled } from '~/stitches'

const StyledForm = styled('form', {})

type FormProps = React.ComponentProps<typeof StyledForm> & {
  defaultValues?: { [key: string]: string | number }
  onSubmit: () => void
}

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  ...remainingProps
}) => {
  const { errors, handleSubmit, register } = useForm({ defaultValues })

  return (
    <StyledForm {...remainingProps} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: React.ReactElement) => {
        const { name } = child.props

        if (!name) return child

        console.log(child.props)
        const fieldError = errors[name]
        return React.createElement(child.type, {
          ...{
            ...child.props,
            // error: fieldError,
            ref: register,
            key: name
          }
        })
      })}
    </StyledForm>
  )
}

Form.displayName = 'Form'
