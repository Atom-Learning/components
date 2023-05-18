import * as React from 'react'

import { mockTestQuestions } from '../types'

type numOfElements = 6 | 8
interface PaginationProviderProps {
  numOfPages: number
  onPageChange?: (pageNumber: number) => void
  numOfElements?: numOfElements
  mockTestQuestions?: mockTestQuestions[]
}

type Context = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  numOfPages?: number
  numOfElements?: numOfElements
  mockTestQuestions?: mockTestQuestions[]
  isMockTestVariant?: boolean
}

const PaginationContext = React.createContext<Context>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  numOfPages: 0,
  numOfElements: 8,
  mockTestQuestions: [],
  isMockTestVariant: false
})

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  numOfPages,
  onPageChange,
  numOfElements,
  mockTestQuestions,
  children
}) => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const isMockTestVariant = Boolean(mockTestQuestions?.length)

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
    if (
      currentPage ===
      (isMockTestVariant ? mockTestQuestions.length : numOfPages)
    ) {
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
        mockTestQuestions,
        isMockTestVariant
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
