import * as React from 'react'

import { Flex } from '..'
import { usePagination } from '../pagination/pagination-context/PaginationContext'
import { PaginationPageButton } from './PaginationPageButton'
import { PaginationPopover } from './PaginationPopover'

export const PaginationPages: React.FC = () => {
  const { numOfPages, currentPage } = usePagination()
  const listOfPages = Array.from({ length: numOfPages - 1 }, (_, i) => i + 1)

  const isTruncated = numOfPages > 4

  const pages =
    currentPage < 3
      ? listOfPages.slice(0, 4)
      : currentPage >= listOfPages.length - 3
      ? listOfPages.splice(-4)
      : listOfPages.slice(currentPage - 3, currentPage + 1)

  return (
    <Flex css={{ gap: '$1' }}>
      {pages.map((pageNumber) => {
        return <PaginationPageButton key={pageNumber} pageNumber={pageNumber} />
      })}
      {isTruncated && <PaginationPopover />}
      <PaginationPageButton pageNumber={numOfPages} />
    </Flex>
  )
}
