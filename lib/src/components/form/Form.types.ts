import type { Mode, UseFormMethods } from 'react-hook-form'

export enum StorageEnum {
  LOCAL = 'local',
  SESSION = 'session'
}

type ExcludeIncludeConfig = {
  exclude?: string[]
  include?: string[]
}

export type PersistOptions = {
  id: string
  storage?: StorageEnum
} & ExcludeIncludeConfig

export type FormPersistParams = {
  storage: Storage
} & ExcludeIncludeConfig

export type PersistFormWrapperValues = {
  persist: PersistOptions
  watch
  setValue
  children: React.ReactNode | any
}

export type FormContentValues = {
  formMethods
  handleSubmit: (
    submitHandler: (data: any) => void | any,
    submitErrorHandler?: (errors: any) => void
  ) => (e: any) => Promise<void>
  onSubmit: (data: any) => void | any
  onError?: (errors: any) => void
  children: React.ReactNode | any
}

export type FormValues = {
  defaultValues?: { [key: string]: string | number }
  onSubmit: (data: any) => void | any
  onError?: (errors: any) => void
  criteriaMode?: 'firstError' | 'all'
  validationMode?: Mode
  persist?: PersistOptions
} & (
  | { children: React.ReactNode; render?: never }
  | { children?: never; render: (methods: UseFormMethods) => React.ReactNode }
)
