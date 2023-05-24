import { ChevronLeft } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { getPaginationItemsToRender } from './pagination.helper'
import type { IPaginationNavigationButtonProps } from './types'
import { usePagination } from './usePagination'

export const PaginationPreviousButton: React.FC<
  IPaginationNavigationButtonProps
> = ({ css }) => {
  const {
    goToPreviousPage,
    currentPage,
    labels,
    disabledPages,
    pagesCount,
    isMaxVisibleElementCount
  } = usePagination()

  const paginationItemsInview = getPaginationItemsToRender(
    currentPage,
    pagesCount,
    TRUNCATED_THRESHOLD,
    isMaxVisibleElementCount
  )
  // Check if we are on the first page or if the first page is disabled and the page number is rendered
  const isDisabled =
    currentPage === 1 ||
    (Boolean(disabledPages?.includes(1)) && paginationItemsInview?.includes(1))

  return (
    <ActionIcon
      hasTooltip={false}
      label={labels?.previousPageButtonLabel || 'Previous page'}
      size="md"
      theme="neutral"
      onClick={goToPreviousPage}
      disabled={isDisabled}
      css={{
        mr: '$1',
        '&:disabled': {
          opacity: '0.3'
        },
        ...css
      }}
    >
      <Icon is={ChevronLeft} />
    </ActionIcon>
  )
}
