import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './pagination-context/PaginationContext'
import { PaginationNavigationButtonProps } from './types'

export const PaginationNextButton: React.FC<
  PaginationNavigationButtonProps
> = ({ onClick, css, label = 'Next page' }) => {
  const { goToNextPage, currentPage, pages } = usePagination()

  const isNumber = typeof pages === 'number'

  const handleClick = () => {
    if (onClick) {
      return onClick(goToNextPage)
    }
    goToNextPage?.()
  }

  return (
    <ActionIcon
      hasTooltip={false}
      label={label}
      size="md"
      theme="neutral"
      onClick={handleClick}
      disabled={currentPage === (isNumber ? pages : pages?.length)}
      css={{
        '&:disabled': {
          opacity: '0.4'
        },
        ...css
      }}
    >
      <Icon is={ChevronRight} />
    </ActionIcon>
  )
}
