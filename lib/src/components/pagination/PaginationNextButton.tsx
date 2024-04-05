import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
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
  const { goToNextPage, labels, nextAvailablePage } = usePagination()

  const isDisabled = !nextAvailablePage

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
