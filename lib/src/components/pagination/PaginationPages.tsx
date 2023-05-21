import * as React from 'react'

import { Flex } from '..'
import { usePagination } from '../pagination/pagination-context/PaginationContext'
import {
  generateSliceOfPages,
  RENDER_EIGHT_ELEMENTS,
  shouldTruncate
} from './pagination.helpers'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { pages as pagesType, visibleElementsCount } from './types'

const TRUNCATED_THRESHOLD = 4

const numOfPaginationItemsToRender = (
  currentPage: number,
  listOfPages: number[] | pagesType[],
  visibleElementsCount?: visibleElementsCount
): number[] | pagesType[] => {
  // We use this boolean to decide how much of the list of pages we have to slice
  const isMaxVisibleElementCount =
    visibleElementsCount === RENDER_EIGHT_ELEMENTS

  // If the current page is before the 3rd page
  // Render pagination items from 1 to 4 or 1 to 2
  if (currentPage < TRUNCATED_THRESHOLD - 1) {
    return listOfPages.slice(0, isMaxVisibleElementCount ? 4 : 2)
  } else if (
    currentPage >=
    listOfPages.length - (isMaxVisibleElementCount ? 3 : 1)
  ) {
    // If the current page is within the last 3 pages or the last page
    // Render the last 4 or 2 pagination items
    return listOfPages.slice(isMaxVisibleElementCount ? -4 : -2)
  }
  // Otherwise render pagination items from the range of n-3 to n+1 or n-2 to n
  return listOfPages.slice(
    currentPage + (isMaxVisibleElementCount ? -3 : -2),
    currentPage + (isMaxVisibleElementCount ? 1 : 0)
  )
}

export const PaginationPages: React.FC<{
  onClick?: (callback: () => void) => void
}> = ({ onClick }) => {
  const { currentPage, visibleElementsCount, pages } = usePagination()

  const isArray = Array.isArray(pages)
  const lastPage = isArray && pages?.slice(-1)

  const lastPageNumber = isArray ? lastPage?.[0]?.pageNumber : pages
  const isLastPageCompleted = lastPage?.[0]?.isCompleted
  const isLastPageDisabled = lastPage?.[0]?.isDisabled

  const listOfPages = generateSliceOfPages(pages)
  const isTruncated = shouldTruncate(TRUNCATED_THRESHOLD, pages)

  const paginationItems = isTruncated
    ? numOfPaginationItemsToRender(
        currentPage,
        listOfPages,
        visibleElementsCount
      )
    : listOfPages

  return (
    <Flex css={{ gap: '$1' }}>
      {paginationItems?.map((page) => {
        const { pageNumber, isCompleted, isDisabled } = page

        return (
          <PaginationItem
            key={pageNumber}
            pageNumber={pageNumber}
            isCompleted={isCompleted}
            isDisabled={isDisabled}
            onClick={onClick}
          />
        )
      })}
      {isTruncated && <PaginationPopover onClick={onClick} />}
      <PaginationItem
        pageNumber={lastPageNumber}
        isCompleted={isLastPageCompleted}
        isDisabled={isLastPageDisabled}
        onClick={onClick}
      />
    </Flex>
  )
}
