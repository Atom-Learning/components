import invariant from 'invariant'
import * as React from 'react'
import type { UseFormMethods } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

const StyledForm = styled('form', {})

type ExcludeAndInclude = { exclude?: string[]; include?: string[] }
type PersistOptions = { id: string } & ExcludeAndInclude
type FormPersistParams = {
  storage: Storage
} & ExcludeAndInclude

type FormProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    defaultValues?: { [key: string]: string | number }
    onSubmit: (data: any) => void
    validationMode: 'onBlur' | 'onSubmit'
    shouldPersist?: boolean
    persistOptions?: PersistOptions
  } & (
    | { children: React.ReactNode; render?: never }
    | { children?: never; render: (methods: UseFormMethods) => React.ReactNode }
  )
>

type FormContentProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    formMethods
    remainingProps
    handleSubmit: (data: any) => void
    onSubmit: (data: any) => void
    formContent
  }
>

type PersistFormWrapperProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    persistOptions: PersistOptions
    watch: (data: any) => void
    setValue
    children: React.ReactNode | any
  }
>

const PersistFormWrapper: React.FC<PersistFormWrapperProps> = ({
  persistOptions,
  watch,
  setValue,
  children
}) => {
  let params: FormPersistParams = {
    storage: window.sessionStorage
  }
  if (persistOptions?.exclude) {
    params = { ...params, exclude: persistOptions.exclude }
  }
  if (!persistOptions?.exclude && persistOptions?.include) {
    params = { ...params, include: persistOptions.include }
  }

  useFormPersist(`form-${persistOptions.id}`, { watch, setValue }, params)

  return children
}

const FormContent: React.FC<FormContentProps> = ({
  formMethods,
  remainingProps,
  handleSubmit,
  onSubmit,
  formContent
}) => {
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

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  validationMode = 'onBlur',
  render,
  shouldPersist,
  persistOptions,
  ...remainingProps
}) => {
  invariant(
    !(children && render),
    '`Form` should only be given one of `children` or `render`. When both are provided, `render` will be used and `children` will be ignored.'
  )

  const formMethods = useForm({
    defaultValues,
    mode: validationMode
  })
  const { handleSubmit, watch, setValue } = formMethods

  const formContent = render ? render(formMethods) : children

  const props = {
    formMethods,
    remainingProps,
    handleSubmit,
    onSubmit,
    formContent
  }

  if (shouldPersist && persistOptions) {
    return (
      <PersistFormWrapper
        persistOptions={persistOptions}
        watch={watch}
        setValue={setValue}
      >
        <FormContent {...props} />
      </PersistFormWrapper>
    )
  }

  return <FormContent {...props} />
}

Form.displayName = 'Form'
