import * as React from 'react'

import { ColorScheme } from '../../experiments/color-scheme'
import { Flex } from '../flex'
import { VisibleElementsAmount } from './pagination.constants'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationItems } from './PaginationItems'
import type { PaginationProps } from './types'

export const Pagination: React.FC<PaginationProps> = ({
  colorScheme,
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount = VisibleElementsAmount.LESS,
  pagesCount,
  indicatedPages = [],
  disabledPages = [],
  onItemHover = () => null,
  labels = {},
  ...rest
}) => {
  if (!pagesCount) return null

  const paginationProviderProps = {
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
        <Flex gap={1} {...rest}>
          <PaginationItems />
        </Flex>
      </ColorScheme>
    </PaginationProvider>
  )
}

Pagination.displayName = 'Pagination'
