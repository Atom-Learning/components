import * as React from 'react'

import { ColorScheme } from '../../experiments/color-scheme'
import { Flex } from '..'
import { RENDER_SIX_ELEMENTS } from './pagination.constants'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import type { TPaginationProps } from './types'

export const Pagination: React.FC<TPaginationProps> = ({
  onSelectedPageChange,
  selectedPage,
  onItemHover,
  colorScheme,
  visibleElementsCount = RENDER_SIX_ELEMENTS,
  pagesCount,
  indicatedPages,
  disabledPages,
  labels,
  children,
  ...rest
}) => {
  // Return null if pages is 0 or undefined
  if (!pagesCount) {
    return null
  }

  return (
    <ColorScheme base="grey1" accent="blue1" {...colorScheme} asChild>
      <Flex {...rest}>
        <PaginationProvider
          onSelectedPageChange={onSelectedPageChange}
          visibleElementsCount={visibleElementsCount}
          pagesCount={pagesCount}
          selectedPage={selectedPage}
          indicatedPages={indicatedPages}
          disabledPages={disabledPages}
          onItemHover={onItemHover}
          labels={labels}
        >
          <PaginationPreviousButton />
          <PaginationPages />
          <PaginationNextButton />
        </PaginationProvider>
      </Flex>
    </ColorScheme>
  )
}

Pagination.displayName = 'Pagination'
