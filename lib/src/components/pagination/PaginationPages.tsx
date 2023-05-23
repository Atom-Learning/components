import * as React from 'react'

import { Stack } from '..'
import { usePagination } from './usePagination'
import {
  RENDER_EIGHT_ELEMENTS,
  TRUNCATED_THRESHOLD
} from './pagination.constants'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { numOfPaginationItemsToRender } from './pagination.helper'

export const PaginationPages = () => {
  const { currentPage, visibleElementsCount, pagesCount } = usePagination()

  const isTruncated = pagesCount > TRUNCATED_THRESHOLD
  const isMaxVisibleElementCount =
    visibleElementsCount === RENDER_EIGHT_ELEMENTS

  const paginationItems = numOfPaginationItemsToRender(
    currentPage,
    pagesCount,
    TRUNCATED_THRESHOLD,
    isMaxVisibleElementCount
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
