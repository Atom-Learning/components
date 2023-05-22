import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'

export type pages = {
  pageNumber: number
}

export type visibleElementsCount = 6 | 8

export interface PaginationProps {
  onSelectedPageChange: (pageNumber: number) => void
  selectedPage?: number
  colorScheme?: TcolorScheme
  css?: CSS
  visibleElementsCount?: visibleElementsCount
  pagesCount: number
  indicatedPages?: number[]
  disabledPages?: number[]
}

export interface PaginationProviderProps {
  onSelectedPageChange: (pageNumber: number) => void
  pagesCount: number
  selectedPage?: number
  visibleElementsCount?: visibleElementsCount
  indicatedPages?: number[]
  disabledPages?: number[]
}

export type Context = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  visibleElementsCount?: visibleElementsCount
  indicatedPages?: number[]
  disabledPages?: number[]
  pages: pages[]
}

export interface PaginationItemProps {
  pageNumber: number
  css?: CSS
  isPopoverButton?: boolean
  onClick?: (callback: () => void) => void
  onItemHover?: (pageNumber: number) => void
}

export interface PaginationNavigationButtonProps {
  onClick?: (callback: () => void) => void
  css?: CSS
  label?: string
}
