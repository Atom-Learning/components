import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  VIEW_ALL_POPOVER
} from './pagination.constants'
import { TPaginationItemsToRender } from './types'

export const getPaginationElementsToRender = (
  currentPage: number,
  pagesCount: number,
  visibleElementsCount: number
): TPaginationItemsToRender => {
  const paginationPages = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  /*
   * As we always show the `<` `>` arrows,
   * subtract 2 from `visibleElementsCount` (one for each of the GO_TO_PREVIOUS/NEXT_PAGE arrows)
   * to get the `visiblePagesCount`
   */
  let visiblePagesCount = visibleElementsCount - 2
  const withPreviousNextPageArrows = (paginationPages) => [
    GO_TO_PREVIOUS_PAGE,
    ...paginationPages,
    GO_TO_NEXT_PAGE
  ]

  /**
   * If fewer pages than threshold for truncating render them all.
   *
   * pagesCount: 6
   * visibleElementsCount: >=6
   * returns [GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | 2 |  | 3 |  | 4 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (pagesCount <= visiblePagesCount) {
    return withPreviousNextPageArrows(paginationPages)
  }

  /**
   * If current page is either at the very start or at the very end of the pages
   */
  const canFitEdgePage = visibleElementsCount >= 5
  const canFitViewAllPopover = visibleElementsCount >= 4
  const canFitPages = visibleElementsCount >= 3

  if (canFitViewAllPopover) {
    // Subtract one from visiblePagesCount to accomodate for us adding the `[…]` VIEW_ALL_POPOVER
    visiblePagesCount -= 1
  }

  if (canFitEdgePage) {
    // Subtract one more from visiblePagesCount to accomodate for us adding the GO_TO_PREVIOUS/NEXT_PAGE arrows
    visiblePagesCount -= 1
  }

  const firstPage = paginationPages[0]
  const lastPage = paginationPages[paginationPages.length - 1]

  /**
   * If we're truncating and current page is at the start of the page list,
   * render the initial truncated page list, e.g.
   *
   *  pagesCount: 8
   *  currentPage: 1/2
   *  visibleElementsCount: 6
   *  returns [GO_TO_PREVIOUS_PAGE, 1, 2, VIEW_ALL_POPOVER, 6, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | 2 |  | … |  | 8 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (currentPage < visiblePagesCount) {
    const newPaginationItems = [] as TPaginationItemsToRender
    if (canFitPages) {
      newPaginationItems.push(...paginationPages.slice(0, visiblePagesCount))
    }
    if (canFitViewAllPopover) {
      newPaginationItems.push(VIEW_ALL_POPOVER)
    }
    if (canFitEdgePage) {
      newPaginationItems.push(lastPage)
    }
    return withPreviousNextPageArrows(newPaginationItems)
  }

  /**
   * If we're truncating and the current page is towards the end of the
   * page list (depending on visibleElementsCount),
   * render a truncated page list from the end, e.g.
   *
   *  pagesCount: 8
   *  currentPage: 7/8
   *  visibleElementsCount: 6
   *  returns [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 7, 8, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | … |  | 7 |  | 8 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (currentPage > pagesCount - visiblePagesCount) {
    const newPaginationItems = [] as TPaginationItemsToRender
    if (canFitEdgePage) {
      newPaginationItems.push(firstPage)
    }
    if (canFitViewAllPopover) {
      newPaginationItems.push(VIEW_ALL_POPOVER)
    }
    if (canFitPages) {
      newPaginationItems.push(
        ...paginationPages.slice(pagesCount - visiblePagesCount, pagesCount)
      )
    }
    return withPreviousNextPageArrows(newPaginationItems)
  }

  /**
   * If we're truncating and the current page doesn't meet any of the previous conditions
   * (we're in the middle)
   * render a truncated page list from a specific index relative to `currentPage`, e.g.
   *
   *  currentPage: 4
   *  visibleElementsCount: 6 // VisibleElementsAmount.LESS
   *  returns [GO_TO_PREVIOUS_PAGE, 3, 4, VIEW_ALL_POPOVER, 6, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 3 |  | 4 |  | … |  | 6 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   *  currentPage: 6
   *  visibleElementsCount: 8 // VisibleElementsAmount.MORE
   *  returns [GO_TO_PREVIOUS_PAGE, 4, 5, 6, 7, VIEW_ALL_POPOVER, 10, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 4 |  | 5 |  | 6 |  | 7 |  | … |  | 10 | | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+  +---+  +---+
   */
  const canFitCurrentPage = canFitPages
  const canFitCurrentPageAndPreviousPage = visibleElementsCount >= 6
  const canFitCurrentPageAndPreviousPageAndNextPage = visibleElementsCount >= 7
  const canFitLastPage = canFitEdgePage

  const newPaginationItems = [] as TPaginationItemsToRender
  if (canFitCurrentPageAndPreviousPageAndNextPage) {
    newPaginationItems.push(
      ...paginationPages.slice(
        currentPage + 1 - visiblePagesCount,
        currentPage + 1
      )
    )
  } else if (canFitCurrentPageAndPreviousPage) {
    newPaginationItems.push(
      ...paginationPages.slice(currentPage - visiblePagesCount, currentPage)
    )
  } else if (canFitCurrentPage) {
    newPaginationItems.push(
      ...paginationPages.slice(currentPage - 1, currentPage - 1 + 1)
    )
  }
  if (canFitViewAllPopover) {
    newPaginationItems.push(VIEW_ALL_POPOVER)
  }
  if (canFitLastPage) {
    newPaginationItems.push(lastPage)
  }
  return withPreviousNextPageArrows(newPaginationItems)
}

export const getPaginationElementsToRenderTwoEllipsis = (
  currentPage: number,
  pagesCount: number,
  visibleElementsCount: number
): TPaginationItemsToRender => {
  const paginationPages = Array.from(
    { length: pagesCount },
    (_, index) => index + 1
  )

  /*
   * As we always show the `<` `>` arrows,
   * subtract 2 from `visibleElementsCount` (one for each of the GO_TO_PREVIOUS/NEXT_PAGE arrows)
   * to get the `visiblePagesCount`
   */
  let visiblePagesCount = visibleElementsCount - 2
  const withPreviousNextPageArrows = (paginationPages) => [
    GO_TO_PREVIOUS_PAGE,
    ...paginationPages,
    GO_TO_NEXT_PAGE
  ]

  /**
   * If fewer pages than threshold for truncating render them all.
   *
   * pagesCount: 6
   * visibleElementsCount: >=6
   * returns [GO_TO_PREVIOUS_PAGE, 1, 2, 3, 4, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | 2 |  | 3 |  | 4 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (pagesCount <= visiblePagesCount) {
    return withPreviousNextPageArrows(paginationPages)
  }

  /**
   * If current page is either at the very start or at the very end of the pages
   */
  const canFitEdgePage = visibleElementsCount >= 6
  const canFitViewAllPopover = visibleElementsCount >= 4
  const canFitPages = visibleElementsCount >= 3

  if (canFitViewAllPopover) {
    // Subtract one from visiblePagesCount to accomodate for us adding the `[…]` VIEW_ALL_POPOVER
    visiblePagesCount -= 1
  }

  if (canFitEdgePage) {
    // Subtract one more from visiblePagesCount to accomodate for us adding the GO_TO_PREVIOUS/NEXT_PAGE arrows
    visiblePagesCount -= 1
  }

  const firstPage = paginationPages[0]
  const lastPage = paginationPages[paginationPages.length - 1]

  /**
   * If we're truncating and current page is at the start of the page list,
   * render the initial truncated page list, e.g.
   *
   *  pagesCount: 8
   *  currentPage: 1/2
   *  visibleElementsCount: 6
   *  returns [GO_TO_PREVIOUS_PAGE, 1, 2, VIEW_ALL_POPOVER, 6, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | 2 |  | … |  | 8 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (currentPage < visiblePagesCount) {
    const newPaginationItems = [] as TPaginationItemsToRender
    if (canFitPages) {
      newPaginationItems.push(...paginationPages.slice(0, visiblePagesCount))
    }
    if (canFitViewAllPopover) {
      newPaginationItems.push(VIEW_ALL_POPOVER)
    }
    if (canFitEdgePage) {
      newPaginationItems.push(lastPage)
    }
    return withPreviousNextPageArrows(newPaginationItems)
  }

  /**
   * If we're truncating and the current page is towards the end of the
   * page list (depending on visibleElementsCount),
   * render a truncated page list from the end, e.g.
   *
   *  pagesCount: 8
   *  currentPage: 7/8
   *  visibleElementsCount: 6
   *  returns [GO_TO_PREVIOUS_PAGE, 1, VIEW_ALL_POPOVER, 7, 8, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | … |  | 7 |  | 8 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   */
  if (currentPage > pagesCount - visiblePagesCount) {
    const newPaginationItems = [] as TPaginationItemsToRender
    if (canFitEdgePage) {
      newPaginationItems.push(firstPage)
    }
    if (canFitViewAllPopover) {
      newPaginationItems.push(VIEW_ALL_POPOVER)
    }
    if (canFitPages) {
      newPaginationItems.push(
        ...paginationPages.slice(pagesCount - visiblePagesCount, pagesCount)
      )
    }
    return withPreviousNextPageArrows(newPaginationItems)
  }

  /**
   * If we're truncating and the current page doesn't meet any of the previous conditions
   * (we're in the middle)
   * render a truncated page list from a specific index relative to `currentPage`, e.g.
   *
   *  currentPage: 4
   *  visibleElementsCount: 6 // VisibleElementsAmount.LESS
   *  returns [GO_TO_PREVIOUS_PAGE, VIEW_ALL_POPOVER, 4, VIEW_ALL_POPOVER, 6, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | … |  | 4 |  | … |  | 6 |  | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+
   *
   *  currentPage: 6
   *  visibleElementsCount: 8 // VisibleElementsAmount.MORE
   *  returns [GO_TO_PREVIOUS_PAGE, 4, 5, 6, 7, VIEW_ALL_POPOVER, 10, GO_TO_NEXT_PAGE]
   *  +---+  +---+  +---+  +---+  +---+  +---+  +---+  +---+
   *  | < |  | 1 |  | … |  | 5 |  | 6 |  | … |  | 10 | | > |
   *  +---+  +---+  +---+  +---+  +---+  +---+  +---+  +---+
   */
  const canFitFirstPage = visibleElementsCount >= 7
  const canFitFirstViewAllPopover = visibleElementsCount >= 5
  const canFitCurrentPage = canFitPages
  const canFitCurrentPageAndPreviousPage = visibleElementsCount >= 8
  const canFitCurrentPageAndPreviousPageAndNextPage = visibleElementsCount >= 9
  const canFitSecondViewAllPopover = canFitViewAllPopover
  const canFitLastPage = canFitEdgePage

  // Subtract one more from visiblePagesCount to accomodate for us adding the first page
  if (canFitFirstPage) {
    visiblePagesCount -= 1
  }

  // Subtract one more from visiblePagesCount to accomodate for us adding the second popover
  if (canFitFirstViewAllPopover) {
    visiblePagesCount -= 1
  }

  const newPaginationItems = [] as TPaginationItemsToRender
  if (canFitFirstPage) {
    newPaginationItems.push(firstPage)
  }
  if (canFitFirstViewAllPopover) {
    newPaginationItems.push(VIEW_ALL_POPOVER)
  }

  if (canFitCurrentPageAndPreviousPageAndNextPage) {
    newPaginationItems.push(
      ...paginationPages.slice(
        currentPage + 1 - visiblePagesCount,
        currentPage + 1
      )
    )
  } else if (canFitCurrentPageAndPreviousPage) {
    newPaginationItems.push(
      ...paginationPages.slice(currentPage - visiblePagesCount, currentPage)
    )
  } else if (canFitCurrentPage) {
    newPaginationItems.push(
      ...paginationPages.slice(currentPage - 1, currentPage - 1 + 1)
    )
  }

  if (canFitSecondViewAllPopover) {
    newPaginationItems.push(VIEW_ALL_POPOVER)
  }
  if (canFitLastPage) {
    newPaginationItems.push(lastPage)
  }
  return withPreviousNextPageArrows(newPaginationItems)
}

export const findNextAvailablePage = (
  startPage: number,
  disabledPages: number[],
  pagesCount: number
): number | undefined => {
  if (startPage > pagesCount) return
  let nextPage = startPage
  while (disabledPages.includes(nextPage)) {
    nextPage++
  }
  return nextPage
}

export const findPreviousAvailablePage = (
  startPage: number,
  disabledPages: number[]
): number | undefined => {
  if (startPage < 1) return
  let previousPage = startPage
  while (disabledPages.includes(previousPage)) {
    previousPage--
  }
  return previousPage
}
