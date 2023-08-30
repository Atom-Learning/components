import * as React from 'react'

import { VisibleElementsAmount } from '../pagination.constants'
import {
  findNextAvailablePage,
  findPreviousAvailablePage,
  getPaginationItemsToRender,
  getPaginationAlignment
} from '../pagination.helper'
import type { IPaginationContext, TPaginationProviderProps } from '../types'

export const PaginationContext = React.createContext<IPaginationContext>({
  goToPage: () => null,
  goToPreviousPage: () => null,
  goToNextPage: () => null,
  currentPage: 1,
  pagesCount: 0,
  onItemHover: () => null,
  paginationItems: [],
  labels: {},
  indicatedPages: [],
  disabledPages: [],
  paginationAlignment: 'end'
})

export const PaginationProvider: React.FC<TPaginationProviderProps> = ({
  onSelectedPageChange,
  selectedPage,
  visibleElementsCount = VisibleElementsAmount.LESS,
  pagesCount,
  indicatedPages = [],
  disabledPages = [],
  onItemHover = () => null,
  labels = {},
  children
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1)

  const currentPage = selectedPage || internalCurrentPage

  const goToPage = React.useCallback(
    (pageNumber: number) => {
      setInternalCurrentPage(pageNumber)
      onSelectedPageChange?.(pageNumber)
    },
    [onSelectedPageChange]
  )

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
  }, [currentPage, disabledPages, goToPage, pagesCount])

  const paginationItems = getPaginationItemsToRender({
    currentPage,
    pagesCount,
    visibleElementsCount
  })
  const paginationAlignment = getPaginationAlignment({
    currentPage,
    pagesCount,
    visibleElementsCount
  })

  const value = React.useMemo(() => {
    return {
      goToNextPage,
      goToPreviousPage,
      goToPage,
      currentPage,
      paginationItems,
      indicatedPages,
      disabledPages,
      pagesCount,
      onItemHover,
      labels,
      paginationAlignment
    }
  }, [
    goToNextPage,
    goToPreviousPage,
    goToPage,
    currentPage,
    indicatedPages,
    paginationItems,
    disabledPages,
    pagesCount,
    onItemHover,
    labels,
    paginationAlignment
  ])

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
