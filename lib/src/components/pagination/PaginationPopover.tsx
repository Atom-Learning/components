import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Flex, Icon, Popover } from '..'
import { PaginationPage } from './PaginationPage'
import { usePagination } from './usePagination'
import { CSS } from '@stitches/react'

interface PaginationPopoverProps {
  pageCSS?: CSS
  indicatedPageCSS?: CSS
  children: React.ReactNode
}

export const PaginationPopover = ({
  pageCSS,
  indicatedPageCSS,
  children
}: PaginationPopoverProps) => {
  const { pagesCount, labels } = usePagination()
  const paginationItems = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  return (
    <Popover>
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
            gap: 1,
            justifyContent: 'center'
          }}
        >
          {paginationItems?.map((pageNumber) => {
            return (
              <PaginationPage
                key={pageNumber}
                pageNumber={pageNumber}
                css={{ bg: '$white', ...pageCSS }}
                indicatedCSS={indicatedPageCSS}
              />
            )
          })}
        </Flex>
      </Popover.Content>
    </Popover>
  )
}
