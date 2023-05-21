import * as React from 'react'

import { pages, visibleElementsCount } from '../types'

interface PaginationProviderProps {
  onSelectedPageChange: (pageNumber: number) => void
  selectedPage?: number
  visibleElementsCount?: visibleElementsCount
  pages: pages[] | number
}

type Context = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  visibleElementsCount?: visibleElementsCount
  pages: pages[] | number
}

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
  pages,
  children
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)

  const currentPage = selectedPage || internalCurrentPage

  const goToPage = (pageNumber: number) => {
    setInternalCurrentPage(pageNumber)
    onSelectedPageChange?.(pageNumber)
  }

  const goToPreviousPage = () => {
    if (internalCurrentPage === 1) {
      return
    }
    goToPage(internalCurrentPage - 1)
  }

  const goToNextPage = () => {
    const isNumber = typeof pages === 'number'

    if (internalCurrentPage === (isNumber ? pages : pages?.length)) {
      return
    }
    goToPage(internalCurrentPage + 1)
  }

  return (
    <PaginationContext.Provider
      value={{
        goToNextPage,
        goToPreviousPage,
        goToPage,
        currentPage,
        visibleElementsCount,
        pages
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
