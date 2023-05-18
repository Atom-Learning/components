import { ChevronRight } from '@atom-learning/icons'
import * as React from 'react'

import { CSS } from '../../stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { usePagination } from './pagination-context/PaginationContext'

export const PaginationNextButton: React.FC<{
  onClick?: (callback: () => void) => void
  css?: CSS
  label?: string
}> = ({ onClick, css, label = 'Next page' }) => {
  const { goToNextPage, currentPage, numOfPages, pages } = usePagination()

  const isEnrichedPages = Boolean(pages?.length)

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
      disabled={currentPage === (isEnrichedPages ? pages?.length : numOfPages)}
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
