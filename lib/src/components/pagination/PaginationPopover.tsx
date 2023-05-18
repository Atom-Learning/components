import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Icon, Popover } from '..'
import { usePagination } from './pagination-context/PaginationContext'
import { getPageDetails } from './pagination.helpers'
import { PaginationPageButton } from './PaginationPageButton'

export const PaginationPopover = () => {
  const { numOfPages, isMockTestVariant, mockTestQuestions } = usePagination()
  const pages = isMockTestVariant
    ? mockTestQuestions
    : Array.from({ length: numOfPages }, (_, i) => i + 1)

  return (
    <Popover>
      <Popover.Trigger asChild>
        <ActionIcon
          hasTooltip={false}
          size="md"
          theme="neutral"
          aria-label="trigger"
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
            isMockTestVariant
          )

          return (
            <PaginationPageButton
              key={pageNumber}
              isPopoverButton={true}
              pageNumber={pageNumber}
              isCompleted={completed}
              isDisabled={disabled}
            />
          )
        })}
      </Popover.Content>
    </Popover>
  )
}
