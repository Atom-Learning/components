import * as React from 'react'

import { Stack } from '..'
import {
  RENDER_EIGHT_ELEMENTS,
  TRUNCATED_THRESHOLD
} from './pagination.constants'
import { numOfPaginationItemsToRender } from './pagination.helper'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { usePagination } from './usePagination'

const shouldTruncate = (
  paginationItems: number[],
  truncatedThreshold: number,
  pagesCount: number
): boolean => {
  // Don't truncate when the second to last page number is visible
  if (paginationItems?.includes(pagesCount - 1)) {
    return false
  } else if (pagesCount > truncatedThreshold) {
    return true
  }
  return true
}

export const PaginationPages = () => {
  const { currentPage, pagesCount, isMaxVisibleElementCount } = usePagination()

  const paginationItems = numOfPaginationItemsToRender(
    currentPage,
    pagesCount,
    TRUNCATED_THRESHOLD,
    isMaxVisibleElementCount
  )

  const isTruncated = shouldTruncate(
    paginationItems,
    TRUNCATED_THRESHOLD,
    pagesCount
  )

  return (
    <Stack gap={1}>
      {paginationItems?.map((pageNumber) => {
        return <PaginationItem key={pageNumber} pageNumber={pageNumber} />
      })}
      {isTruncated && <PaginationPopover />}
      <PaginationItem pageNumber={pagesCount} />
    </Stack>
  )
}
