import React from 'react'

import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'

import type { UniqueIdentifier } from '@dnd-kit/core'

import type { PaginationState } from '@tanstack/react-table'
import {
  DataTableContextType,
  TAsyncDataOptions,
  TAsyncDataResult,
  TDefaultSort,
  AsyncDataState,
  TGetAsyncData,
  TableData,
  InitialState
} from './DataTable.types'
import { getNewAsyncData } from './getNewAsyncData'
import { useSortByColumn } from './useSorting'
const defaultPaginationState: PaginationState = { pageIndex: 0, pageSize: 10 }
export const usePagination = (
  initialPaginationState: PaginationState | undefined
) => {
  const [isPaginated, setIsPaginated] = React.useState<boolean>(
    !!initialPaginationState
  )

  const [paginationState, setPaginationState] = React.useState<
    PaginationState | undefined
  >({
    ...defaultPaginationState,
    ...(initialPaginationState || {})
  })

  const applyPagination = React.useCallback(() => {
    setIsPaginated(true)
  }, [])

  return {
    isPaginated,
    paginationState,
    setPaginationState,
    applyPagination
  }
}
