import invariant from 'invariant'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

import { styled } from '~/stitches'

import type {
  FormContentValues,
  FormPersistParams,
  FormValues,
  PersistFormWrapperValues
} from './Form.types'
import { StorageEnum } from './Form.types'

const StyledForm = styled('form', {})

type FormProps = React.ComponentPropsWithoutRef<typeof StyledForm> & FormValues

type FormContentProps = React.ComponentPropsWithoutRef<typeof StyledForm> &
  FormContentValues

type PersistFormWrapperProps = React.ComponentPropsWithoutRef<
  typeof StyledForm
> &
  PersistFormWrapperValues

const PersistFormWrapper: React.FC<PersistFormWrapperProps> = ({
  persist,
  watch,
  setValue,
  children
}) => {
  const { id, ...options } = persist

  let params: FormPersistParams = {
    ...options,
    storage:
      options.storage === StorageEnum.LOCAL
        ? window.localStorage
        : window.sessionStorage
  }

  if (options.exclude) {
    // Workaround for bug in react-hook-form-persist package
    // package will still read from and save exclude param
    // so need to send inputs we actually want to read from in include param instead
    const { exclude, ...rest } = params
    const allValues = watch()
    const include = Object.keys(allValues).filter((key) => {
      if (!options.exclude?.includes(key)) return key
    })
    params = { ...rest, include }
  }

  useFormPersist(id, { watch, setValue }, params)

  return children
}

const FormContent: React.FC<FormContentProps> = ({
  formMethods,
  handleSubmit,
  onSubmit,
  children,
  ...remainingProps
}) => (
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

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  validationMode = 'onBlur',
  render,
  persist,
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
    handleSubmit,
    onSubmit,
    ...remainingProps
  }

  if (persist) {
    return (
      <PersistFormWrapper persist={persist} watch={watch} setValue={setValue}>
        <FormContent {...props}>{formContent}</FormContent>
      </PersistFormWrapper>
    )
  }

  return <FormContent {...props}>{formContent}</FormContent>
}

Form.displayName = 'Form'
