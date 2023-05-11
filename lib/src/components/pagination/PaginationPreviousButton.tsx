import { ChevronLeft } from '@atom-learning/icons'
import * as React from 'react'

import { CSS } from '../../stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './pagination-context/PaginationContext'

export const PaginationPreviousButton: React.FC<{
  onClick?: (callback: () => void) => void
  css?: CSS
}> = ({ onClick, css }) => {
  const { goToPreviousPage, currentPage } = usePagination()

  const handleClick = () => {
    if (onClick) {
      onClick(goToPreviousPage)
    }
    goToPreviousPage?.()
  }

  return (
    <ActionIcon
      hasTooltip={false}
      size="md"
      theme="neutral"
      onClick={handleClick}
      css={css}
      disabled={currentPage === 1}
    >
      <Icon is={ChevronLeft} />
    </ActionIcon>
  )
}
