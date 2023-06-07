import * as React from 'react'

import { ColorScheme } from '../../experiments/color-scheme'
import { Flex } from '..'
import { PaginationProvider } from './pagination-context/PaginationContext'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPages } from './PaginationPages'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import type { IPaginationProps } from './types'

export const Pagination: React.FC<IPaginationProps> = ({
  colorScheme,
  css,
  ...paginationProps
}) => {
  // Return null if pages is 0 or undefined
  if (!paginationProps?.pagesCount) {
    return null
  }

  return (
    <ColorScheme base="grey1" accent="blue1" {...colorScheme} asChild>
      <Flex css={css}>
        <PaginationProvider {...paginationProps}>
          <PaginationPreviousButton />
          <PaginationPages />
          <PaginationNextButton />
        </PaginationProvider>
      </Flex>
    </ColorScheme>
  )
}

Pagination.displayName = 'Pagination'
