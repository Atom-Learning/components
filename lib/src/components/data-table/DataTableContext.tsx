import type { UniqueIdentifier } from '@dnd-kit/core'
import type { PaginationState } from '@tanstack/react-table'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import * as React from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'

import {
  AsyncDataState,
  DataTableContextType,
  InitialState,
  TableData,
  TAsyncDataOptions,
  TAsyncDataResult,
  TDefaultSort,
  TGetAsyncData
} from './DataTable.types'
import { getNewAsyncData } from './getNewAsyncData'
import { usePagination } from './usePagination'
import { useSortByColumn } from './useSorting'

const DataTableContext =
  React.createContext<DataTableContextType<unknown> | null>(null)

type DataTableProviderProps = {
  columns
  defaultSort?: TDefaultSort
  children: React.ReactNode
  initialState?: InitialState
} & (
  | { data: TableData; getAsyncData?: never }
  | { data?: never; getAsyncData: TGetAsyncData }
)

export const DataTableProvider = ({
  columns,
  data: dataProp = [],
  getAsyncData,
  defaultSort,
  initialState = undefined,
  children
}: DataTableProviderProps): JSX.Element => {
  const [data, setData] = React.useState<TAsyncDataResult>({
    results: dataProp ?? [],
    total: dataProp?.length ?? 0
  })
  const { isPaginated, applyPagination, paginationState, setPaginationState } =
    usePagination(initialState?.pagination)

  const [asyncDataState, setAsyncDataState] = React.useState<AsyncDataState>(
    AsyncDataState.NONE
  )

  const [globalFilter, setGlobalFilter] = React.useState<string>('')

  const { setIsSortable, isSortable, sorting, setSorting } =
    useSortByColumn(defaultSort)

  const runAsyncData = React.useCallback(
    async (overrideAsyncDataOptions: Partial<TAsyncDataOptions>) => {
      if (!getAsyncData) return

      try {
        setAsyncDataState(AsyncDataState.PENDING)

        const newData = await getNewAsyncData(
          getAsyncData,
          overrideAsyncDataOptions,
          paginationState as PaginationState,
          sorting,
          globalFilter
        )

        setData(newData as TAsyncDataResult)
        setAsyncDataState(AsyncDataState.FULFILLED)
      } catch (error) {
        setAsyncDataState(AsyncDataState.REJECTED)
      }
    },
    [
      getAsyncData,
      paginationState?.pageIndex,
      paginationState?.pageSize,
      sorting,
      globalFilter
    ]
  )

  React.useEffect(() => {
    runAsyncData({})
  }, [runAsyncData])

  useDeepCompareEffect(() => {
    if (!dataProp) return

    setData({ results: dataProp, total: dataProp.length })
  }, [dataProp])

  const getTotalRows = () => data.total

  const table = useReactTable<unknown>({
    columns,
    data: data.results,
    pageCount: paginationState
      ? Math.ceil(getTotalRows() / paginationState.pageSize)
      : -1,
    initialState: initialState,
    state: {
      sorting,
      globalFilter,
      pagination: paginationState
    },
    manualPagination: getAsyncData && isPaginated,
    manualSorting: getAsyncData && isPaginated,
    enableSorting: asyncDataState !== AsyncDataState.PENDING,
    enableGlobalFilter: !getAsyncData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: isPaginated ? setPaginationState : undefined,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter
  })

  const value: DataTableContextType = React.useMemo(() => {
    return {
      ...table,
      data,
      setData,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable,
      asyncDataState,
      runAsyncData
    }
  }, [table, applyPagination, getTotalRows, isSortable])

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  )
}

export const useDataTable = <T extends Record<string, unknown>>() => {
  const context = React.useContext(DataTableContext) as DataTableContextType<T>

  if (!context)
    throw new Error(
      'useDataTable can only be called from inside a DataTableProvider'
    )

  return context
}
