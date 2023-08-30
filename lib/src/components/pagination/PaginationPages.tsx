import * as React from 'react'

import { Flex } from '../flex'
import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { getPaginationItemsToRender } from './pagination.helper'
import { PaginationItem } from './PaginationItem'
import { PaginationPopover } from './PaginationPopover'
import { usePagination } from './usePagination'

export const PaginationPages = () => {
  const { currentPage, pagesCount, isMaxVisibleElementCount, paginationItems } =
    usePagination()

  const isTruncated = pagesCount > TRUNCATED_THRESHOLD
  const renderPopoverOnLeft =
    currentPage > pagesCount - (isMaxVisibleElementCount ? 4 : 2)

  return (
    <Flex gap={1}>
      {paginationItems?.map((pageNumber, index) => (
        <PaginationItem
          key={pageNumber}
          pageNumber={pageNumber}
          css={{ order: index + 1 }}
        />
      ))}
      {isTruncated && (
        <>
          <PaginationItem
            pageNumber={renderPopoverOnLeft ? 1 : pagesCount}
            css={{ order: renderPopoverOnLeft ? 0 : pagesCount }}
          />
          <PaginationPopover
            css={{
              order: renderPopoverOnLeft ? 0 : isMaxVisibleElementCount ? 4 : 2
            }}
          />
        </>
      )}
    </Flex>
  )
}
