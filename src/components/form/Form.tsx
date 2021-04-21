import invariant from 'invariant'
import * as React from 'react'
import type { UseFormMethods } from 'react-hook-form'
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
  } & (
    | { children: React.ReactNode; render?: never }
    | { children?: never; render: (methods: UseFormMethods) => React.ReactNode }
  )
>

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  validationMode = 'onBlur',
  render,
  ...remainingProps
}) => {
  console.log('children:', children)
  invariant(
    !(children && render),
    '`Form` should only be given one of `children` or `render`. When both are provided, `render` will be used and `children` will be ignored.'
  )

  const formMethods = useForm({
    defaultValues,
    mode: validationMode
  })
  const { handleSubmit } = formMethods

  const formContent = render ? render(formMethods) : children

  return (
    <FormProvider {...formMethods}>
      <StyledForm
        aria-label="form"
        {...remainingProps}
        onSubmit={handleSubmit(onSubmit)}
      >
        {formContent}
      </StyledForm>
    </FormProvider>
  )
}

Form.displayName = 'Form'
