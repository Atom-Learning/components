import * as React from 'react'

import { VisibleElementsAmount } from '../pagination.constants'
import {
  findNextAvailablePage,
  findPreviousAvailablePage,
  getPaginationElementsToRender
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
  disabledPages: []
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

  const previousPage = currentPage - 1
  const previousAvailablePage = findPreviousAvailablePage(
    previousPage,
    disabledPages
  )

  const goToPreviousPage = React.useCallback(() => {
    if (previousAvailablePage) goToPage(previousAvailablePage)
  }, [goToPage, previousAvailablePage])

  const nextPage = currentPage + 1
  const nextAvailablePage = findNextAvailablePage(
    nextPage,
    disabledPages,
    pagesCount
  )
  const goToNextPage = React.useCallback(() => {
    if (nextAvailablePage) goToPage(nextAvailablePage)
  }, [goToPage, nextAvailablePage])

  const paginationItems = getPaginationElementsToRender(
    currentPage,
    pagesCount,
    visibleElementsCount
  )

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
      previousAvailablePage,
      nextAvailablePage,
      labels
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
    previousAvailablePage,
    nextAvailablePage,
    labels
  ])

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
