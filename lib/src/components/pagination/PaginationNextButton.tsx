import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { getPaginationItemsToRender } from './pagination.helper'
import type { IPaginationNavigationButtonProps } from './types'
import { usePagination } from './usePagination'

export const PaginationNextButton: React.FC<
  IPaginationNavigationButtonProps
> = ({ css }) => {
  const {
    goToNextPage,
    currentPage,
    pagesCount,
    labels,
    disabledPages,
    isMaxVisibleElementCount
  } = usePagination()

  const paginationItemsInview = getPaginationItemsToRender(
    currentPage,
    pagesCount,
    TRUNCATED_THRESHOLD,
    isMaxVisibleElementCount
  )
  // Check if we are on the last page or if the last page is disabled and the if the second to last page number is rendered
  const isDisabled =
    currentPage === pagesCount ||
    (Boolean(disabledPages?.includes(pagesCount)) &&
      Boolean(paginationItemsInview?.includes(pagesCount - 1)))

  return (
    <ActionIcon
      hasTooltip={false}
      label={labels?.nextPageButtonLabel || 'Next page'}
      size="md"
      theme="neutral"
      onClick={goToNextPage}
      disabled={isDisabled}
      css={{
        ml: '$1',
        '&:disabled': {
          opacity: '0.3'
        },
        ...css
      }}
    >
      <Icon is={ChevronRight} />
    </ActionIcon>
  )
}
