import * as React from 'react'

import { ColorScheme, TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import { Box } from '..'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { mockTestQuestions, numOfElements } from './types'

interface PaginationProps {
  numOfPages?: number
  colorScheme?: TcolorScheme
  onPageChange?: (pageNumber: number) => void
  css?: CSS
  numOfElements?: numOfElements
  mockTestQuestions?: mockTestQuestions[]
}

type PaginationType = React.FC<PaginationProps> & {
  PreviousButton: typeof PaginationPreviousButton
  NextButton: typeof PaginationNextButton
  Pages: typeof PaginationPages
}

export const Pagination: PaginationType = ({
  numOfPages,
  onPageChange,
  colorScheme,
  css,
  numOfElements = 8,
  mockTestQuestions = [],
  children
}) => {
  return (
    <ColorScheme {...colorScheme}>
      <Box css={css}>
        <PaginationProvider
          numOfPages={numOfPages}
          onPageChange={onPageChange}
          numOfElements={numOfElements}
          mockTestQuestions={mockTestQuestions}
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
