import { Ellypsis } from '@atom-learning/icons'
import React from 'react'

import { ActionIcon, Icon, Popover } from '..'
import { usePagination } from './pagination-context/PaginationContext'
import { PaginationPageButton } from './PaginationPageButton'

export const PaginationPopover = () => {
  const { numOfPages } = usePagination()
  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1)
  return (
    <Popover>
      <Popover.Trigger asChild>
        <ActionIcon hasTooltip={false} size="md" theme="neutral">
          <Icon is={Ellypsis} />
        </ActionIcon>
      </Popover.Trigger>
      <Popover.Content
        size="md"
        showCloseButton={false}
        css={{ p: '$4', display: 'flex', flexWrap: 'wrap', gap: '$1' }}
      >
        {pages.map((pageNumber) => (
          <PaginationPageButton
            key={pageNumber}
            css={{ bg: '$white !important' }}
            pageNumber={pageNumber}
          />
        ))}
      </Popover.Content>
    </Popover>
  )
}
