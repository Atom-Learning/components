import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Icon, Popover } from '..'
import { usePagination } from './pagination-context/PaginationContext'
import { PaginationItem } from './PaginationItem'

export const PaginationPopover: React.FC<{
  onClick?: (callback: () => void) => void
}> = ({ onClick }) => {
  const { pages } = usePagination()

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
        {pages?.map((page) => {
          const { pageNumber } = page

          return (
            <PaginationItem
              key={pageNumber}
              isPopoverButton={true}
              pageNumber={pageNumber}
              onClick={onClick}
            />
          )
        })}
      </Popover.Content>
    </Popover>
  )
}
