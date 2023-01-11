import type { Table, SortDirection } from '@tanstack/react-table'
import * as React from 'react'

export enum AsyncDataState {
  NONE = 'none',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}

export type TAsyncDataResult = {
  total: number
  results: Array<Record<string, unknown>>
}

export type TAsyncDataOptions = {
  pageIndex: number
  pageSize: number
  sortBy?: string
  sortDirection?: SortDirection
  globalFilter?: string
}

export type TGetAsyncData = (
  options: TAsyncDataOptions
) => Promise<TAsyncDataResult | undefined>

export type DataTableContextType<T = unknown> = Table<T> & {
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  isSortable: boolean
  asyncDataState?: AsyncDataState
  runAsyncData?: (options: Partial<TAsyncDataOptions>) => Promise<void>
  numberOfStickyColumns: number
  setNumberOfStickyColumns: (value: number) => void
}
