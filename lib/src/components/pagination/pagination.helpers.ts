import { pages } from './types'

export const generateSliceOfPages = (
  pages: pages[] | number
): pages[] | number[] | [] => {
  const isArray = Array.isArray(pages)
  if (isArray) {
    return pages.slice(0, pages.length - 1)
  }

  if (!isArray) {
    return Array.from({ length: pages - 1 }, (_, i) => ({ pageNumber: i + 1 }))
  }

  return []
}

export const shouldTruncate = (
  truncateThreshold: number,
  pages: pages[] | number
): boolean => {
  const isArray = Array.isArray(pages)
  if (isArray) {
    return pages.length > truncateThreshold
  }

  if (!isArray) {
    return pages > truncateThreshold
  }
  return false
}

export const RENDER_SIX_ELEMENTS = 6
export const RENDER_EIGHT_ELEMENTS = 8
