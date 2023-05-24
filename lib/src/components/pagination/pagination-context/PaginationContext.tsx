import * as React from 'react'

import { VisibleElementsAmount } from '../pagination.constants'
import {
  findNextAvailablePage,
  findPreviousAvailablePage
} from '../pagination.helper'
import type { TPaginationContext, TPaginationProviderProps } from '../types'

export const PaginationContext = React.createContext<TPaginationContext>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  visibleElementsCount: VisibleElementsAmount.LESS,
  pagesCount: 0,
  onItemHover: () => null,
  labels: {},
  isMaxVisibleElementCount: false
})

export const PaginationProvider: React.FC<TPaginationProviderProps> = ({
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount = VisibleElementsAmount.LESS,
  pagesCount,
  indicatedPages,
  disabledPages,
  onItemHover,
  labels,
  children
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)
  const isMaxVisibleElementCount =
    visibleElementsCount === VisibleElementsAmount.MORE

  const currentPage = selectedPage || internalCurrentPage

  const goToPage = React.useCallback((pageNumber: number) => {
    setInternalCurrentPage(pageNumber)
    onSelectedPageChange?.(pageNumber)
  }, [])

  const goToPreviousPage = React.useCallback(() => {
    if (currentPage === 1) {
      return
    }
    const previousPage = currentPage - 1
    const previousAvailablePage = findPreviousAvailablePage(
      previousPage,
      disabledPages
    )

    if (previousAvailablePage < 1) return
    goToPage(previousAvailablePage)
  }, [currentPage, disabledPages, goToPage])

  const goToNextPage = React.useCallback(() => {
    if (currentPage === pagesCount) {
      return
    }
    const nextPage = currentPage + 1
    const nextAvailablePage = findNextAvailablePage(nextPage, disabledPages)

    if (nextAvailablePage > pagesCount) return
    goToPage(nextAvailablePage)
  }, [currentPage, disabledPages, goToPage])

  const value = React.useMemo(() => {
    return {
      goToNextPage,
      goToPreviousPage,
      goToPage,
      currentPage,
      visibleElementsCount,
      indicatedPages,
      disabledPages,
      pagesCount,
      onItemHover,
      labels,
      isMaxVisibleElementCount
    }
  }, [
    goToNextPage,
    goToPreviousPage,
    goToPage,
    currentPage,
    visibleElementsCount,
    indicatedPages,
    disabledPages,
    pagesCount,
    onItemHover,
    labels,
    isMaxVisibleElementCount
  ])

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
