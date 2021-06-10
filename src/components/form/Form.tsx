import invariant from 'invariant'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

import { styled } from '~/stitches'

const StyledForm = styled('form', {})

import {
  FormContentProps,
  FormPersistParams,
  FormProps,
  PersistFormWrapperProps,
  StorageEnum
} from './Form.types'

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
      options.storage === StorageEnum.local
        ? window.localStorage
        : window.sessionStorage
  }

  if (options.exclude) {
    // Workaround for package bug
    const { exclude, ...rest } = params
    const allValues = watch()
    const include = Object.keys(allValues).filter((key) => {
      if (!options.exclude.includes(key)) return key
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
}) => {
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

  // if (persist) {
  //   invariant(
  //     !(persist.include && persist.exclude),
  //     'If `Form` is sent `persist`, it should only be given one of `include` or `exclude`. When both are provided, `exclude` will be used and `include` will be ignored.'
  //   )
  // }

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
