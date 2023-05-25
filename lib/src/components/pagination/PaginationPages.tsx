import * as React from 'react'

import { Stack } from '..'
import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { getPaginationItemsToRender } from './pagination.helper'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { usePagination } from './usePagination'

export const PaginationPages = () => {
  const { currentPage, pagesCount, isMaxVisibleElementCount } = usePagination()

  const paginationItems = getPaginationItemsToRender(
    currentPage,
    pagesCount,
    TRUNCATED_THRESHOLD,
    isMaxVisibleElementCount
  )

  const isTruncated = pagesCount > TRUNCATED_THRESHOLD

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
