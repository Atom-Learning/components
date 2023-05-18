import * as React from 'react'

import { pages, numOfElements } from '../types'

interface PaginationProviderProps {
  numOfPages?: number
  onPageChange: (pageNumber: number) => void
  numOfElements?: numOfElements
  pages?: pages[]
}

type Context = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  numOfPages?: number
  numOfElements?: numOfElements
  pages?: pages[]
}

const PaginationContext = React.createContext<Context>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  numOfPages: 0,
  numOfElements: 8,
  pages: []
})

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  numOfPages,
  onPageChange,
  numOfElements,
  pages,
  children
}) => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const isEnrichedPages = Boolean(pages?.length)

  React.useEffect(() => {
    onPageChange?.(currentPage)
  }, [currentPage, onPageChange])

  const goToPage = (index: number) => {
    setCurrentPage(index)
  }

  const goToPreviousPage = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage((currentPage) => currentPage - 1)
  }

  const goToNextPage = () => {
    if (currentPage === (isEnrichedPages ? pages?.length : numOfPages)) {
      return
    }

    setCurrentPage((currentPage) => currentPage + 1)
  }

  return (
    <PaginationContext.Provider
      value={{
        goToNextPage,
        goToPreviousPage,
        goToPage,
        currentPage,
        numOfPages,
        numOfElements,
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
