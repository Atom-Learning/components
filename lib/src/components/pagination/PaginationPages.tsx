import * as React from 'react'

import { Flex } from '..'
import { usePagination } from '../pagination/pagination-context/PaginationContext'
import {
  generateSliceOfPages,
  getPageDetails,
  RENDER_EIGHT_ELEMENTS,
  shouldTruncate
} from './pagination.helpers'
import { PaginationPageButton } from './PaginationPageButton'
import { PaginationPopover } from './PaginationPopover'
import { numOfElements, pages as pagesType } from './types'

const TRUNCATED_THRESHOLD = 4

const numOfPagesToRender = (
  currentPage: number,
  listOfPages: number[] | pagesType[],
  numOfElements?: numOfElements
): number[] | pagesType[] => {
  // We use this boolean to decide how much of the list of pages we have to slice
  const isMaxNumOfEl = numOfElements === RENDER_EIGHT_ELEMENTS

  // If the current page is less than the truncated threshold minus 1
  if (currentPage < TRUNCATED_THRESHOLD - 1) {
    return listOfPages.slice(0, isMaxNumOfEl ? 4 : 2) // Return a portion of the list of pages
  } else if (currentPage >= listOfPages.length - (isMaxNumOfEl ? 3 : 1)) {
    // Return a portion of the last pages in the list of pages
    return listOfPages.slice(isMaxNumOfEl ? -4 : -2)
  }
  // Return a portion of the list based of the current page and if we are rendering max number of elements (8)
  return listOfPages.slice(
    currentPage + (isMaxNumOfEl ? -3 : -2),
    currentPage + (isMaxNumOfEl ? 1 : 0)
  )
}

export const PaginationPages: React.FC<{
  onClick?: (callback: () => void) => void
}> = ({ onClick }) => {
  const {
    numOfPages,
    currentPage,
    numOfElements,
    pages: enrichedPages
  } = usePagination()

  const isEnrichedPages = Boolean(enrichedPages?.length)
  const lastEnrichedPage = isEnrichedPages && enrichedPages?.slice(-1)

  const lastPageNumber = lastEnrichedPage?.[0]?.pageNumber
  const isLastPageCompleted = lastEnrichedPage?.[0]?.isCompleted
  const isLastPageDisabled = lastEnrichedPage?.[0]?.isDisabled

  const listOfPages = generateSliceOfPages(enrichedPages, numOfPages)
  const isTruncated = shouldTruncate(
    TRUNCATED_THRESHOLD,
    enrichedPages,
    numOfPages
  )

  const pages = isTruncated
    ? numOfPagesToRender(currentPage, listOfPages, numOfElements)
    : listOfPages

  return (
    <Flex css={{ gap: '$1' }}>
      {pages?.map((page) => {
        const [pageNumber, completed, disabled] = getPageDetails(
          page,
          isEnrichedPages
        )

        return (
          <PaginationPageButton
            key={pageNumber}
            pageNumber={pageNumber}
            isCompleted={completed}
            isDisabled={disabled}
            onClick={onClick}
          />
        )
      })}
      {isTruncated && <PaginationPopover onClick={onClick} />}
      <PaginationPageButton
        pageNumber={isEnrichedPages ? lastPageNumber : numOfPages}
        isCompleted={isLastPageCompleted}
        isDisabled={isLastPageDisabled}
        onClick={onClick}
      />
    </Flex>
  )
}
