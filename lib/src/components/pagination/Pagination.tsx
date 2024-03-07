import * as React from 'react'

import { ColorScheme } from '../../experiments/color-scheme'
import { Flex } from '../flex'
import { VisibleElementsAmount } from './pagination.constants'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationItems } from './PaginationItems'
import { PaginationPopover } from './PaginationPopover'
import type { PaginationProps, PaginationProviderProps } from './types'

export const Pagination = ({
  colorScheme,
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount = VisibleElementsAmount.LESS,
  pagesCount,
  indicatedPages = [],
  disabledPages = [],
  onItemHover = () => null,
  labels = {},
  showPopoverTrigger = false,
  popoverTriggerLabel = null,
  ...rest
}: PaginationProps) => {
  if (!pagesCount) return null

  const paginationProviderProps: PaginationProviderProps = {
    onSelectedPageChange,
    selectedPage,
    visibleElementsCount,
    pagesCount,
    indicatedPages,
    disabledPages,
    onItemHover,
    labels
  }

  return (
    <PaginationProvider {...paginationProviderProps}>
      <ColorScheme base="grey1" accent="primary1" {...colorScheme} asChild>
        {showPopoverTrigger ? (
          <PaginationPopover>{popoverTriggerLabel}</PaginationPopover>
        ) : (
          <Flex gap={1} {...rest}>
            <PaginationItems />
          </Flex>
        )}
      </ColorScheme>
    </PaginationProvider>
  )
}

Pagination.displayName = 'Pagination'
