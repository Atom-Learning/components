import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { CSS } from '../../stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './pagination-context/PaginationContext'

export const PaginationNextButton: React.FC<{
  onClick?: (callback: () => void) => void
  css?: CSS
}> = ({ onClick, css }) => {
  const { goToNextPage, currentPage, numOfPages } = usePagination()

  const handleClick = () => {
    if (onClick) {
      onClick(goToNextPage)
    }
    goToNextPage?.()
  }

  return (
    <ActionIcon
      hasTooltip={false}
      size="md"
      theme="neutral"
      onClick={handleClick}
      disabled={currentPage === numOfPages}
      css={css}
    >
      <Icon is={ChevronRight} />
    </ActionIcon>
  )
}
