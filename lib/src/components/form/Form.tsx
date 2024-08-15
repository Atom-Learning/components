import React from 'react'
import {
  DefaultValues,
  FieldErrors,
  FieldValues,
  FormProvider,
  Mode,
  useForm,
  UseFormMethods
} from 'react-hook-form'

import { styled } from '~/stitches'

const StyledForm = styled('form', {})

type StyledFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  'onSubmit' | 'onError'
>

interface FormProps<TFormData extends FieldValues> extends StyledFormProps {
  defaultValues?: DefaultValues<TFormData>
  validationMode?: Mode
  onSubmit: (data: TFormData) => void | any
  onError?: (errors: FieldErrors<TFormData>) => void
  children:
    | React.ReactNode
    | ((methods: UseFormMethods<TFormData>) => React.ReactNode)
}

export const Form = <TFormData extends FieldValues>(
  props: FormProps<TFormData>
) => {
  const {
    children,
    defaultValues,
    validationMode = 'onBlur',
    onSubmit,
    onError,
    ...rest
  } = props

  const methods = useForm<TFormData>({
    defaultValues,
    mode: validationMode
  })

  return (
    <FormProvider {...methods}>
      <StyledForm
        aria-label="form"
        onSubmit={methods.handleSubmit(onSubmit, onError)}
        {...rest}
      >
        {typeof children === 'function' ? children(methods) : children}
      </StyledForm>
    </FormProvider>
  )
}

Form.displayName = 'Form'
