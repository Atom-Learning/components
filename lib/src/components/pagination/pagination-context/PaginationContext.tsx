import * as React from 'react'

interface PaginationProviderProps {
  numOfPages: number
  onPageChange: (pageNumber: number) => void
}

type Context = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  numOfPages: number
}

const PaginationContext = React.createContext<Context>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 0,
  numOfPages: 0
})

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  numOfPages,
  onPageChange,
  children
}) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    onPageChange(currentPage)
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
    if (currentPage === numOfPages) {
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
        numOfPages
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
