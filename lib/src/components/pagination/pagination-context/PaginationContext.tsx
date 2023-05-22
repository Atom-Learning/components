import * as React from 'react'

import { Context, PaginationProviderProps } from '../types'

const PaginationContext = React.createContext<Context>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  visibleElementsCount: 8,
  pages: []
})

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount,
  pagesCount,
  indicatedPages,
  disabledPages,
  children
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)

  const currentPage = selectedPage || internalCurrentPage

  const pages = React.useMemo(
    () => Array.from({ length: pagesCount }, (_, i) => ({ pageNumber: i + 1 })),
    [pagesCount]
  )

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
    if (currentPage === pages?.length) {
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
        pages,
        indicatedPages,
        disabledPages
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export const usePagination = (): Context => {
  const context = React.useContext(PaginationContext)

  if (!context) {
    throw new Error(
      'Ensure that you wrap any components with the PaginationProvider component'
    )
  }

  return context
}
