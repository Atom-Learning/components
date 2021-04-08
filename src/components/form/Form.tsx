import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

const StyledForm = styled('form', {})

type FormProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    defaultValues?: { [key: string]: string | number }
    onSubmit: (data: any) => void
    validationMode: 'onBlur' | 'onSubmit'
  }
>

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  validationMode = 'onBlur',
  ...remainingProps
}) => {
  const formMethods = useForm({
    defaultValues,
    mode: validationMode
  })
  const { handleSubmit } = formMethods

  return (
    <FormProvider {...formMethods}>
      <StyledForm
        aria-label="form"
        {...remainingProps}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </StyledForm>
    </FormProvider>
  )
}

Form.displayName = 'Form'
