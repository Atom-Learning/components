import { pages } from './types'

export const getPageDetails = (
  page: pages | number,
  isEnrichedPage: boolean
): [number, boolean, boolean] => {
  let pageNum
  let completed = false
  let disabled = false

  if (isEnrichedPage) {
    const { pageNumber, isCompleted, isDisabled } = page as pages
    pageNum = pageNumber
    completed = isCompleted
    disabled = Boolean(isDisabled)
    return [pageNum, completed, disabled]
  }

  return [page as number, completed, disabled]
}

export const generateSliceOfPages = (
  pages?: pages[],
  numOfPages?: number
): pages[] | number[] | [] => {
  if (pages?.length) {
    return pages.slice(0, pages.length - 1)
  }

  if (numOfPages) {
    return Array.from({ length: numOfPages - 1 }, (_, i) => i + 1)
  }

  return []
}

export const shouldTruncate = (
  truncateThreshold: number,
  pages?: pages[],
  numOfPages?: number
): boolean => {
  if (pages?.length) {
    return pages.length > truncateThreshold
  }

  if (numOfPages) {
    return numOfPages > truncateThreshold
  }
  return false
}

export const RENDER_SIX_ELEMENTS = 6
export const RENDER_EIGHT_ELEMENTS = 8
