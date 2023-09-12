import * as React from 'react'

import { Flex } from '../flex'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { usePagination } from './usePagination'

export const PaginationPages = () => {
  const { pagesCount, paginationItems, paginationAlignment } = usePagination()

  const isTruncated = pagesCount > paginationItems.length

  return (
    <Flex gap={1}>
      {isTruncated && paginationAlignment === 'start' && (
        <>
          <PaginationItem pageNumber={1} />
          <PaginationPopover />
        </>
      )}
      {paginationItems?.map((pageNumber) => (
        <PaginationItem key={pageNumber} pageNumber={pageNumber} />
      ))}
      {isTruncated && paginationAlignment === 'end' && (
        <>
          <PaginationPopover />
          <PaginationItem pageNumber={pagesCount} />
        </>
      )}
    </Flex>
  )
}
