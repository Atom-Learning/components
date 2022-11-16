import type { Table } from '@tanstack/react-table'
import * as React from 'react'

export enum ApiQueryStatus {
  NONE = 'none',
  PENDING = 'pending',
  SUCCEDED = 'succeded',
  FAILED = 'failed'
}

export type DataTableContextType<T = unknown> = Table<T> & {
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  isSortable: boolean
  apiQueryStatus?: ApiQueryStatus
}
export const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)
