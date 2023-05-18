import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Icon, Popover } from '..'
import { usePagination } from './pagination-context/PaginationContext'
import { getPageDetails } from './pagination.helpers'
import { PaginationPageButton } from './PaginationPageButton'
import { pages as pageTypes } from './types'

const generateListOfPages = (
  pages?: pageTypes[],
  numOfPages?: number
): pageTypes[] | number[] | [] => {
  if (pages && pages.length) return pages

  if (numOfPages) {
    return Array.from({ length: numOfPages }, (_, i) => i + 1)
  }

  return []
}

export const PaginationPopover: React.FC<{
  onClick?: (callback: () => void) => void
}> = ({ onClick }) => {
  const { numOfPages, pages: enrichedPages } = usePagination()

  const isEnrichedPages = Boolean(enrichedPages?.length)
  const pages = generateListOfPages(enrichedPages, numOfPages)

  return (
    <Popover>
      <Popover.Trigger asChild>
        <ActionIcon
          hasTooltip={false}
          size="md"
          theme="neutral"
          label="Open popover pagination"
          data-testid="popover_trigger"
        >
          <Icon is={Ellypsis} />
        </ActionIcon>
      </Popover.Trigger>
      <Popover.Content
        size="md"
        showCloseButton={false}
        css={{ p: '$4', display: 'flex', flexWrap: 'wrap', gap: '$1' }}
      >
        {pages.map((page) => {
          const [pageNumber, completed, disabled] = getPageDetails(
            page,
            isEnrichedPages
          )

          return (
            <PaginationPageButton
              key={pageNumber}
              isPopoverButton={true}
              pageNumber={pageNumber}
              isCompleted={completed}
              isDisabled={disabled}
              onClick={onClick}
            />
          )
        })}
      </Popover.Content>
    </Popover>
  )
}
