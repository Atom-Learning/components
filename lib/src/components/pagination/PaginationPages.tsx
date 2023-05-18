import * as React from 'react'

import { Flex } from '..'
import { usePagination } from '../pagination/pagination-context/PaginationContext'
import { getPageDetails } from './pagination.helpers'
import { PaginationPageButton } from './PaginationPageButton'
import { PaginationPopover } from './PaginationPopover'
import { mockTestQuestions, numOfElements } from './types'

const TRUNCATED_THRESHOLD = 4

const numOfPagesToRender = (
  currentPage: number,
  listOfPages: number[] | mockTestQuestions[],
  numOfElements: numOfElements
): number[] | mockTestQuestions[] => {
  const isMaxNumOfEl = numOfElements === 8

  if (currentPage < TRUNCATED_THRESHOLD - 1) {
    return listOfPages.slice(0, isMaxNumOfEl ? 4 : 2)
  } else if (currentPage >= listOfPages.length - (isMaxNumOfEl ? 3 : 1)) {
    return listOfPages.slice(isMaxNumOfEl ? -4 : -2)
  }

  return listOfPages.slice(
    currentPage + (isMaxNumOfEl ? -3 : -2),
    currentPage + (isMaxNumOfEl ? 1 : 0)
  )
}

export const PaginationPages: React.FC = () => {
  const {
    numOfPages,
    currentPage,
    numOfElements,
    mockTestQuestions,
    isMockTestVariant
  } = usePagination()

  const lastMockTestQuestion = isMockTestVariant && mockTestQuestions.slice(-1)

  const lastQuestionNumber = lastMockTestQuestion?.[0]?.questionNumber
  const isLastQuestionCompleted = lastMockTestQuestion?.[0]?.isCompleted
  const isLastQuesitonDisabled = lastMockTestQuestion?.[0]?.isDisabled

  const listOfPages = isMockTestVariant
    ? mockTestQuestions.slice(0, mockTestQuestions.length - 1)
    : Array.from({ length: numOfPages - 1 }, (_, i) => i + 1)

  const isTruncated = isMockTestVariant
    ? mockTestQuestions?.length > TRUNCATED_THRESHOLD
    : numOfPages > TRUNCATED_THRESHOLD

  const pages = isTruncated
    ? numOfPagesToRender(currentPage, listOfPages, numOfElements)
    : listOfPages

  return (
    <Flex css={{ gap: '$1' }}>
      {pages.map((page) => {
        const [pageNumber, completed, disabled] = getPageDetails(
          page,
          isMockTestVariant
        )

        return (
          <PaginationPageButton
            key={pageNumber}
            pageNumber={pageNumber}
            isCompleted={completed}
            isDisabled={disabled}
          />
        )
      })}
      {isTruncated && <PaginationPopover />}
      <PaginationPageButton
        pageNumber={isMockTestVariant ? lastQuestionNumber : numOfPages}
        isCompleted={isLastQuestionCompleted}
        isDisabled={isLastQuesitonDisabled}
      />
    </Flex>
  )
}
