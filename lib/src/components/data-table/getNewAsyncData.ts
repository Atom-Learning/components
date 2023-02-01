import type {
  PaginationState,
  SortDirection,
  SortingState
} from '@tanstack/react-table'
import invariant from 'invariant'

import type {
  TAsyncDataOptions,
  TAsyncDataResult,
  TGetAsyncData
} from './DataTable.types'

const getSortDirection = (sorting: SortingState): SortDirection | undefined => {
  if (sorting[0]) {
    return sorting[0].desc ? 'desc' : 'asc'
  }
  return undefined
}

export const getNewAsyncData = async (
  getAsyncData: TGetAsyncData,
  asyncDataOptions: Partial<TAsyncDataOptions>,
  paginationState: PaginationState,
  sorting: SortingState,
  globalFilter: string
): Promise<TAsyncDataResult | undefined> => {
  const { pageIndex, pageSize } = paginationState
  const params = {
    pageIndex: asyncDataOptions?.pageIndex ?? pageIndex,
    pageSize: asyncDataOptions?.pageSize ?? pageSize,
    sortBy: asyncDataOptions?.sortBy ?? sorting[0]?.id,
    sortDirection: asyncDataOptions?.sortDirection ?? getSortDirection(sorting),
    globalFilter: asyncDataOptions.globalFilter ?? globalFilter
  }

  const newData = await getAsyncData(params)

  invariant(
    Array.isArray(newData?.results),
    'The getAsyncData function must return an object with a property `result` which must be an array'
  )
  invariant(
    newData && Number.isInteger(newData.total) && newData.total >= 0,
    'The getAsyncData function must return an object with a property `total` which must be a positive integer or zero'
  )

  return newData
}
