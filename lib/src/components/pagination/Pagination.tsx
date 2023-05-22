import * as React from 'react'

import { ColorScheme } from '../../experiments/color-scheme'
import { Box } from '..'
import {
  RENDER_EIGHT_ELEMENTS,
  RENDER_SIX_ELEMENTS
} from './pagination.constants'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { PaginationProps } from './types'

export const Pagination: React.FC<PaginationProps> & {
  PreviousButton: typeof PaginationPreviousButton
  NextButton: typeof PaginationNextButton
  Pages: typeof PaginationPages
} = ({
  onSelectedPageChange,
  selectedPage,
  colorScheme,
  css,
  visibleElementsCount = 6,
  pagesCount,
  indicatedPages,
  disabledPages,
  children
}) => {
  if (
    visibleElementsCount === undefined &&
    visibleElementsCount !== (RENDER_SIX_ELEMENTS || RENDER_EIGHT_ELEMENTS)
  )
    throw new Error(
      "The Pagination Component only takes the values 8 or 6 when passing 'visibleElementsCount' as a prop"
    )

  // Throw error if pages is 0 or undefined
  if (!pagesCount) {
    throw new Error(
      "The Pagination Component requires the 'pagesCount' prop it can be a numerical value above 0"
    )
  }

  return (
    <ColorScheme base="grey1" accent="blue1" {...colorScheme}>
      <Box css={css}>
        <PaginationProvider
          onSelectedPageChange={onSelectedPageChange}
          visibleElementsCount={visibleElementsCount}
          pagesCount={pagesCount}
          selectedPage={selectedPage}
          indicatedPages={indicatedPages}
          disabledPages={disabledPages}
        >
          {children}
        </PaginationProvider>
      </Box>
    </ColorScheme>
  )
}

Pagination.PreviousButton = PaginationPreviousButton
Pagination.NextButton = PaginationNextButton
Pagination.Pages = PaginationPages

Pagination.displayName = 'Pagination'
