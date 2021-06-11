import type { UseFormMethods } from 'react-hook-form'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

const StyledForm = styled('form', {})

enum StorageEnum {
  local = 'local',
  session = 'session'
}

type PersistOptions = {
  id: string
  storage?: StorageEnum
  exclude?: string[]
  include?: string[]
}

type FormPersistParams = {
  storage: Storage
  exclude?: string[]
  include?: string[]
}

type FormProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    defaultValues?: { [key: string]: string | number }
    onSubmit: (data: any) => void
    validationMode: 'onBlur' | 'onSubmit'
    persist?: PersistOptions
  } & (
    | { children: React.ReactNode; render?: never }
    | { children?: never; render: (methods: UseFormMethods) => React.ReactNode }
  )
>

type FormContentProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    formMethods
    handleSubmit: (data: any) => void
    onSubmit: (data: any) => void
    children: React.ReactNode | any
  }
>

type PersistFormWrapperProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    persist: PersistOptions
    watch
    setValue
    children: React.ReactNode | any
  }
>

export {
  FormPersistParams,
  PersistFormWrapperProps,
  FormContentProps,
  FormProps,
  StorageEnum
}
