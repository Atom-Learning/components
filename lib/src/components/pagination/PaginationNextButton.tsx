import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { TRUNCATED_THRESHOLD } from './pagination.constants'
import { getPaginationItemsToRender } from './pagination.helper'
import { usePagination } from './usePagination'

const StyledActionIcon = styled(ActionIcon, {
  ml: '$1',
  '&:disabled': {
    opacity: '0.3'
  }
})

export const PaginationNextButton = (
  props: Partial<React.ComponentProps<typeof StyledActionIcon>>
) => {
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
    (disabledPages?.includes(pagesCount) &&
      paginationItemsInview.includes(pagesCount - 1))

  return (
    <StyledActionIcon
      hasTooltip={false}
      size="md"
      theme="neutral"
      onClick={goToNextPage}
      disabled={isDisabled}
      {...props}
      label={labels?.nextPageButtonLabel || 'Next page'}
    >
      <Icon is={ChevronRight} />
    </StyledActionIcon>
  )
}
