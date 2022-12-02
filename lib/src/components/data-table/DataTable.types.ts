import type { Table } from '@tanstack/react-table'
import * as React from 'react'

export enum ApiQueryStatus {
  NONE = 'none',
  PENDING = 'pending',
  SUCCEDED = 'succeded',
  FAILED = 'failed'
}

export type TFetcherResult = {
  total: number
  results: Array<Record<string, unknown>>
}

export type TFetcherOptions = {
  pageIndex: number
  pageSize: number
  sortBy: string
  sortDirection: 'asc' | 'desc' | null
}

export type DataTableContextType<T = unknown> = Table<T> & {
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  isSortable: boolean
  apiQueryStatus?: ApiQueryStatus
  doFetchData?: (options: TFetcherOptions) => Promise<void>
}
