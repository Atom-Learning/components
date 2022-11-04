import type { Table } from '@tanstack/react-table'
import * as React from 'react'
export type DataTableContextType<T = unknown> = Table<T> & {
  setIsSortable: React.Dispatch<React.SetStateAction<boolean>>
  applyPagination: () => void
  getTotalRows: () => number
  isSortable: boolean
}
export const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)
