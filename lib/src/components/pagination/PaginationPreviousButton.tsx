import { ChevronLeft } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './usePagination'

const StyledActionIcon = styled(ActionIcon, {
  mr: '$1',
  '&:disabled': {
    opacity: '0.3'
  }
})

export const PaginationPreviousButton = (
  props: Partial<React.ComponentProps<typeof StyledActionIcon>>
) => {
  const {
    goToPreviousPage,
    currentPage,
    labels,
    disabledPages,
    paginationItems
  } = usePagination()

  // Check if we are on the first page or if the first page is disabled and the page number is rendered
  const isDisabled =
    currentPage === 1 ||
    (disabledPages.includes(1) && paginationItems.includes(1))

  return (
    <StyledActionIcon
      hasTooltip={false}
      size="md"
      theme="neutral"
      onClick={goToPreviousPage}
      disabled={isDisabled}
      {...props}
      label={labels?.previousPageButtonLabel || 'Previous page'}
    >
      <Icon is={ChevronLeft} />
    </StyledActionIcon>
  )
}
