import {
  MAX_PAGINATION_ITEMS,
  MIN_PAGINATION_ITEMS,
  TRUNCATED_THRESHOLD,
  VisibleElementsAmount
} from './pagination.constants'
import { IPaginationAlignment } from './types'

const getMaxPaginationItems = (visibleElementsCount: VisibleElementsAmount) =>
  visibleElementsCount === VisibleElementsAmount.MORE
    ? MAX_PAGINATION_ITEMS
    : MIN_PAGINATION_ITEMS

export const getPaginationAlignment = (
  currentPage: number,
  pagesCount: number,
  visibleElementsCount: VisibleElementsAmount
): IPaginationAlignment =>
  currentPage > pagesCount - getMaxPaginationItems(visibleElementsCount)
    ? 'start'
    : 'end'

export const getPaginationItemsToRender = (
  currentPage: number,
  pagesCount: number,
  visibleElementsCount = VisibleElementsAmount.LESS
): number[] => {
  const maxPaginationItemsCount = getMaxPaginationItems(visibleElementsCount)
  const paginationItems = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  /**
   * If there are fewer pages than our threshold for truncating,
   * render the entire page list
   *
   *  +---+  +---+  +---+  +---+
   *  | 1 |  | 2 |  | 3 |  | 4 |
   *  +---+  +---+  +---+  +---+
   */
  if (pagesCount <= TRUNCATED_THRESHOLD) {
    return paginationItems
  }

  /**
   * If we're truncating and current page is at the start of the page list,
   * render the initial truncated page list, e.g.
   *
   *  currentPage: 1/2
   *  visibleElementsCount: 6 // VisibleElementsAmount.LESS
   *  returns [1, 2]
   *  +---+  +---+  +---+  +---+
   *  | 1 |  | 2 |  | … |  | 6 |
   *  +---+  +---+  +---+  +---+
   *
   *  currentPage: 1/2/3
   *  visibleElementsCount: 8 // VisibleElementsAmount.MORE
   *  returns [1, 2, 3, 4]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | 1 |  | 2 |  | 3 |  | 4 |  | … |  | 10 |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   */
  if (
    visibleElementsCount === VisibleElementsAmount.MORE
      ? [1, 2, 3].includes(currentPage)
      : [1, 2].includes(currentPage)
  ) {
    return paginationItems.slice(0, maxPaginationItemsCount)
  }

  /**
   * If we're truncating and the current page is towards the end of the
   * page list (depending on visibleElementsCount),
   * render a truncated page list from the end, e.g.
   *
   *  currentPage: 7
   *  visibleElementsCount: 6 // VisibleElementsAmount.LESS
   *  returns [7, 8]
   *  +---+  +---+  +---+  +---+
   *  | 1 |  | … |  | 5 |  | 6 |
   *  +---+  +---+  +---+  +---+
   *
   *  currentPage: 7
   *  visibleElementsCount: 8 // VisibleElementsAmount.MORE
   *  returns [7, 8, 9, 10]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | 1 |  | … |  | 7 |  | 8 |  | 9 |  | 10 |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   */
  if (currentPage > pagesCount - maxPaginationItemsCount) {
    return paginationItems.slice(-maxPaginationItemsCount)
  }

  /**
   * If we're truncating and the current page doesn't meet either previous condition
   * (we're in the middle)
   * render a truncated page list from a specific index relative to `currentPage`, e.g.
   *
   *  currentPage: 4
   *  visibleElementsCount: 6 // VisibleElementsAmount.LESS
   *  returns [3, 4]
   *  +---+  +---+  +---+  +---+
   *  | 3 |  | 4 |  | … |  | 6 |
   *  +---+  +---+  +---+  +---+
   *
   *  currentPage: 6
   *  visibleElementsCount: 8 // VisibleElementsAmount.MORE
   *  returns [4, 5, 6, 7]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | 4 |  | 5 |  | 6 |  | 7 |  | … |  | 10 |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   */
  return paginationItems.slice(
    visibleElementsCount === VisibleElementsAmount.MORE
      ? currentPage - 3
      : currentPage - 2,
    visibleElementsCount === VisibleElementsAmount.MORE
      ? currentPage + 1
      : currentPage
  )
}

export const findNextAvailablePage = (
  startPage: number,
  disabledPages: number[]
): number => {
  let nextPage = startPage
  while (disabledPages.includes(nextPage)) {
    nextPage++
  }
  return nextPage
}

export const findPreviousAvailablePage = (
  startPage: number,
  disabledPages: number[]
): number => {
  let previousPage = startPage
  while (disabledPages.includes(previousPage)) {
    previousPage--
  }
  return previousPage
}
