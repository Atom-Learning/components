import * as React from 'react'

import { RENDER_SIX_ELEMENTS } from '../pagination.constants'
import type { TPaginationContext, TPaginationProviderProps } from '../types'

export const PaginationContext = React.createContext<TPaginationContext>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  visibleElementsCount: RENDER_SIX_ELEMENTS,
  pagesCount: 0,
  onItemHover: () => null,
  labels: {}
})

export const PaginationProvider: React.FC<TPaginationProviderProps> = ({
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount,
  pagesCount,
  indicatedPages,
  disabledPages,
  onItemHover,
  labels,
  children
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)

  const currentPage = selectedPage || internalCurrentPage

  const goToPage = (pageNumber: number) => {
    setInternalCurrentPage(pageNumber)
    onSelectedPageChange?.(pageNumber)
  }

  const goToPreviousPage = () => {
    if (currentPage === 1) {
      return
    }
    goToPage(currentPage - 1)
  }

  const goToNextPage = () => {
    if (currentPage === pagesCount) {
      return
    }
    goToPage(currentPage + 1)
  }

  return (
    <PaginationContext.Provider
      value={{
        goToNextPage,
        goToPreviousPage,
        goToPage,
        currentPage,
        visibleElementsCount,
        indicatedPages,
        disabledPages,
        pagesCount,
        onItemHover,
        labels
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
