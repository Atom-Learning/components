import { Ellypsis } from '@atom-learning/icons'
import React from 'react'
import { Stack } from '~/index'

import { ActionIcon, Icon, Popover } from '..'
import { usePagination } from './usePagination'
import { PaginationItem } from './PaginationItem'

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
        <Stack css={{ p: '$4', display: 'flex', flexWrap: 'wrap' }} gap={1}>
          {paginationItems?.map((pageNumber) => {
            return (
              <PaginationItem
                key={pageNumber}
                pageNumber={pageNumber}
                css={{ bg: '$white !important' }}
              />
            )
          })}
        </Stack>
      </Popover.Content>
    </Popover>
  )
}
