import * as React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '~/stitches'
import * as yup from 'yup'

const StyledForm = styled('form', {})

type FormProps = React.ComponentProps<typeof StyledForm> & {
  defaultValues?: { [key: string]: string | number }
  onSubmit: () => void
}

export function getForm<T>(): React.FC {
  type FormProps = React.ComponentProps<typeof StyledForm> & {
    onSubmit: () => void
  }

  const Form: React.FC<FormProps> = ({
    children,
    // defaultValues,
    onSubmit,
    ...remainingProps
  }) => {
    const { errors, handleSubmit, register } = useForm<T>()

    return (
      <StyledForm {...remainingProps} onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child: React.ReactElement) => {
          const { name } = child.props

          if (!name) return child

          const fieldError = errors[name]
          return React.createElement(child.type, {
            ...{
              ...child.props,
              error: fieldError,
              ref: register,
              key: name
            }
          })
        })}
      </StyledForm>
    )
  }

  Form.displayName = 'Form'

  return Form
}

type GenericFormProps<T> = React.ComponentProps<typeof StyledForm> & {
  defaultValues?: T
  onSubmit: (data: T) => void
}

export const Form = function <T extends { [x: string]: any }>({
  children,
  defaultValues,
  onSubmit,
  ...remainingProps
}: GenericFormProps<T>): React.ReactNode {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(createSchema(defaultValues)),
    defaultValues
  })

  return (
    <StyledForm {...remainingProps} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: React.ReactElement) => {
        const { name } = child.props

        if (!name) return child

        const fieldError = errors[name]
        return React.createElement(child.type, {
          ...{
            ...child.props,
            error: fieldError,
            ref: register,
            key: name
          }
        })
      })}
    </StyledForm>
  )
}

Form.displayName = 'Form'

const createSchema = <T,>(data: T) =>
  yup.object().shape(
    // Can't derive type from generic T, it causes error, because of Object.entries
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(data).reduce(
      (acc: Record<string, any>, item: [string, any]) => {
        const key = item[0]
        const value = item[1]
        const validationType = typeof value

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(yup as any)[validationType]) {
          return acc
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        acc[key] = (yup as any)[validationType]().required()

        return acc
      },
      {}
    )
  )
