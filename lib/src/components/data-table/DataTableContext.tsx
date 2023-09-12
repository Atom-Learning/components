import { v4 as uuid } from '@lukeed/uuid'
import type {
  PaginationState,
  ExpandedState,
  Row,
  RowSelectionState
} from '@tanstack/react-table'
import {
  getCoreRowModel,
  getExpandedRowModel,
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
  enableRowSelection?: boolean | ((row: Row<unknown>) => boolean)
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
  enableRowSelection,
  children
}: DataTableProviderProps): JSX.Element => {
  const tableId = React.useRef(uuid())

  const [data, setData] = React.useState<TAsyncDataResult>({
    results: dataProp ?? [],
    total: dataProp?.length ?? 0
  })

  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

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
      pagination: paginationState,
      rowSelection,
      expanded
    },
    manualPagination: getAsyncData && isPaginated,
    manualSorting: getAsyncData && isPaginated,
    enableSorting: asyncDataState !== AsyncDataState.PENDING,
    enableGlobalFilter: !getAsyncData,
    enableRowSelection,
    onExpandedChange: setExpanded,
    getSubRows: (row: Row<unknown>) => row.subRows,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: isPaginated ? getPaginationRowModel() : undefined,
    getSortedRowModel:
      isSortable || sorting.length ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onPaginationChange: isPaginated ? setPaginationState : undefined,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const checkFilterMatchesCell = (cellValue: string) =>
        cellValue.toLowerCase().includes(filterValue.toLowerCase())

      const value = row.getValue(columnId)
      switch (typeof value) {
        case 'string':
          return checkFilterMatchesCell(value)
        case 'boolean':
        case 'number':
          return checkFilterMatchesCell(String(value))
        default:
          return false
      }
    }
  })

  const value: DataTableContextType = React.useMemo(() => {
    return {
      ...table,
      columns,
      data,
      setData,
      setIsSortable,
      applyPagination,
      getTotalRows,
      isSortable,
      asyncDataState,
      runAsyncData,
      enableRowSelection,
      rowSelection,
      tableId: tableId.current
    }
  }, [
    table,
    applyPagination,
    getTotalRows,
    isSortable,
    enableRowSelection,
    tableId
  ])

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
