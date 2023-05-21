import * as React from 'react'

import { ColorScheme, TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import { Box } from '..'
import {
  RENDER_EIGHT_ELEMENTS,
  RENDER_SIX_ELEMENTS
} from './pagination.helpers'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { pages, visibleElementsCount } from './types'

interface PaginationProps {
  selectedPage?: number
  onSelectedPageChange: (pageNumber: number) => void
  colorScheme?: TcolorScheme
  css?: CSS
  visibleElementsCount?: visibleElementsCount
  pages: pages[] | number
}

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
  pages,
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
  if (!pages) {
    throw new Error(
      "The Pagination Component requires the 'page' prop it can be a numerical value above 0 or an array of objects with a 'pageNumber' property"
    )
  }

  return (
    <ColorScheme base="grey1" accent="blue1" {...colorScheme}>
      <Box css={css}>
        <PaginationProvider
          onSelectedPageChange={onSelectedPageChange}
          visibleElementsCount={visibleElementsCount}
          pages={pages}
          selectedPage={selectedPage}
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
