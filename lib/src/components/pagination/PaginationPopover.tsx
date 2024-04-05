import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Flex, Icon, Popover } from '..'
import { PaginationPage } from './PaginationPage'
import { usePagination } from './usePagination'

export const PaginationPopover = ({
  children
}: React.PropsWithChildren<unknown>) => {
  const { pagesCount, labels } = usePagination()
  const paginationItems = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} defaultOpen={false}>
      <Popover.Trigger asChild>
        {children || (
          <ActionIcon
            hasTooltip={false}
            size="md"
            theme="neutral"
            label={labels?.popoverTriggerLabel || 'Open pagination popover'}
            data-testid="pagination_popover_trigger"
          >
            <Icon is={Ellypsis} />
          </ActionIcon>
        )}
      </Popover.Trigger>
      <Popover.Content size="md" showCloseButton={false} css={{ p: 0 }}>
        <Flex
          css={{
            p: '$4',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '$1',
            justifyContent: 'center'
          }}
        >
          {paginationItems?.map((pageNumber) => {
            return (
              <PaginationPage
                key={pageNumber}
                pageNumber={pageNumber}
                onClick={() => setIsOpen(false)}
              />
            )
          })}
        </Flex>
      </Popover.Content>
    </Popover>
  )
}
