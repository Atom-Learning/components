import React from 'react'

import type { PaginationState } from '@tanstack/react-table'

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
