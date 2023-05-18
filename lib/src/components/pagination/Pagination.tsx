import * as React from 'react'

import { ColorScheme, TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import { Box } from '..'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { numOfElements, pages } from './types'
import {
  RENDER_SIX_ELEMENTS,
  RENDER_EIGHT_ELEMENTS
} from './pagination.helpers'

interface PaginationProps {
  numOfPages?: number
  colorScheme?: TcolorScheme
  onPageChange: (pageNumber: number) => void
  css?: CSS
  numOfElements?: numOfElements
  pages?: pages[]
}

export const Pagination: React.FC<PaginationProps> & {
  PreviousButton: typeof PaginationPreviousButton
  NextButton: typeof PaginationNextButton
  Pages: typeof PaginationPages
} = ({
  numOfPages,
  onPageChange,
  colorScheme,
  css,
  numOfElements = 8,
  pages = [],
  children
}) => {
  if (
    numOfElements === undefined &&
    numOfElements !== (RENDER_SIX_ELEMENTS || RENDER_EIGHT_ELEMENTS)
  )
    throw new Error(
      "The Pagination Component only takes the values 8 or 6 when passing 'numOfElements' as a prop"
    )

  return (
    <ColorScheme base="grey1" accent="blue1" {...colorScheme}>
      <Box css={css}>
        <PaginationProvider
          numOfPages={numOfPages}
          onPageChange={onPageChange}
          numOfElements={numOfElements}
          pages={pages}
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
