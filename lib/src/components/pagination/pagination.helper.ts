export const getPaginationItemsToRender = (
  currentPage: number,
  pagesCount: number,
  truncatedThreshold: number,
  isMaxVisibleElementCount: boolean
): number[] => {
  const listOfPages = Array.from(
    { length: pagesCount - 1 },
    (_, index) => index + 1
  )

  if (pagesCount <= truncatedThreshold) return listOfPages

  // If the current page is before the 3rd page
  // Render pagination items from 1 to 4 or 1 to 2
  if (currentPage < truncatedThreshold - 1) {
    return listOfPages.slice(0, isMaxVisibleElementCount ? 4 : 2)
  } else if (
    currentPage >=
    listOfPages.length - (isMaxVisibleElementCount ? 3 : 1)
  ) {
    // If the current page is within the last 3 pages or the last page
    // Render the last 4 or 2 pagination items
    return listOfPages.slice(isMaxVisibleElementCount ? -4 : -2)
  }
  // Otherwise render pagination items from the range of n-3 to n+1 or n-2 to n
  return listOfPages.slice(
    currentPage + (isMaxVisibleElementCount ? -3 : -2),
    currentPage + (isMaxVisibleElementCount ? 1 : 0)
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
