import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Flex, Icon, Popover } from '..'
import { PaginationItem } from './PaginationItem'
import { usePagination } from './usePagination'

export const PaginationPopover = () => {
  const { pagesCount, labels } = usePagination()
  const paginationItems = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  return (
    <Popover>
      <Popover.Trigger asChild>
        <ActionIcon
          hasTooltip={false}
          size="md"
          theme="neutral"
          label={labels?.popoverTriggerLabel || 'Open pagination popover'}
          data-testid="pagination_popover_trigger"
        >
          <Icon is={Ellypsis} />
        </ActionIcon>
      </Popover.Trigger>
      <Popover.Content size="md" showCloseButton={false} css={{ p: 0 }}>
        <Flex wrap="wrap" gap="1" justify="center" css={{ p: '$4' }}>
          {paginationItems?.map((pageNumber) => (
            <PaginationItem
              key={pageNumber}
              pageNumber={pageNumber}
              css={{ bg: '$white' }}
            />
          ))}
        </Flex>
      </Popover.Content>
    </Popover>
  )
}
