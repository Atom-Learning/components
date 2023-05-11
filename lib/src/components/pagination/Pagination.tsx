import * as React from 'react'

import { ColorScheme, TcolorScheme } from '../../experiments/color-scheme'
import { Box } from '..'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { CSS } from '../../stitches'

interface PaginationProps {
  numOfPages: number
  onPageChange: (pageNumber: number) => void
  colorScheme: TcolorScheme
  css: CSS
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
  children
}) => {
  return (
    <ColorScheme {...colorScheme}>
      <Box css={css}>
        <PaginationProvider numOfPages={numOfPages} onPageChange={onPageChange}>
          {children}
        </PaginationProvider>
      </Box>
    </ColorScheme>
  )
}

Pagination.PreviousButton = PaginationPreviousButton
Pagination.NextButton = PaginationNextButton
Pagination.Pages = PaginationPages
