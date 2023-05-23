import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './usePagination'
import type { IPaginationNavigationButtonProps } from './types'

export const PaginationNextButton: React.FC<
  IPaginationNavigationButtonProps
> = ({ css }) => {
  const { goToNextPage, currentPage, pagesCount, labels } = usePagination()

  return (
    <ActionIcon
      hasTooltip={false}
      label={labels?.nextPageButtonLabel || 'Next page'}
      size="md"
      theme="neutral"
      onClick={goToNextPage}
      disabled={currentPage === pagesCount}
      css={{
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
