import { ChevronLeft } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './usePagination'
import type { IPaginationNavigationButtonProps } from './types'

export const PaginationPreviousButton: React.FC<
  IPaginationNavigationButtonProps
> = ({ css }) => {
  const { goToPreviousPage, currentPage, labels } = usePagination()

  return (
    <ActionIcon
      hasTooltip={false}
      label={labels?.previousPageButtonLabel || 'Previous page'}
      size="md"
      theme="neutral"
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      css={{
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
