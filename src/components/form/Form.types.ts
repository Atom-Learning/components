import type { UseFormMethods } from 'react-hook-form'

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
  handleSubmit: (data: any) => void | any
  onSubmit: (data: any) => void | any
  children: React.ReactNode | any
}

export type FormValues = {
  defaultValues?: { [key: string]: string | number }
  onSubmit: (data: any) => void | any
  validationMode?: 'onBlur' | 'onSubmit'
  persist?: PersistOptions
} & (
  | { children: React.ReactNode; render?: never }
  | { children?: never; render: (methods: UseFormMethods) => React.ReactNode }
)
