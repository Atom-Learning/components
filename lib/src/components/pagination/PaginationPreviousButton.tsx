import { ChevronLeft } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './pagination-context/PaginationContext'
import { PaginationNavigationButtonProps } from './types'

export const PaginationPreviousButton: React.FC<
  PaginationNavigationButtonProps
> = ({ onClick, css, label = 'Previous page' }) => {
  const { goToPreviousPage, currentPage } = usePagination()

  const handleClick = () => {
    if (onClick) {
      return onClick(goToPreviousPage)
    }
    goToPreviousPage?.()
  }

  return (
    <ActionIcon
      hasTooltip={false}
      label={label}
      size="md"
      theme="neutral"
      onClick={handleClick}
      disabled={currentPage === 1}
      css={{
        '&:disabled': {
          opacity: '0.4'
        },
        ...css
      }}
    >
      <Icon is={ChevronLeft} />
    </ActionIcon>
  )
}
