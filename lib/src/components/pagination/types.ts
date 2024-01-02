import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  VIEW_ALL_POPOVER
} from './pagination.constants'

export type PaginationItemsToRender = (
  | number
  | typeof VIEW_ALL_POPOVER
  | typeof GO_TO_PREVIOUS_PAGE
  | typeof GO_TO_NEXT_PAGE
)[]

interface Labels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface BasePaginationProps {
  pagesCount: number
  indicatedPages: number[]
  disabledPages: number[]
  paginationItems: PaginationItemsToRender
  labels: Labels
  onItemHover: (pageNumber: number) => void
}

export type TVisibleElementsCount = 6 | 8

export interface PaginationItemProps {
  pageNumber: number
  css?: CSS
}
export interface PaginationContextValue extends BasePaginationProps {
  currentPage: number
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  nextAvailablePage?: number
  previousAvailablePage?: number
}

export type PaginationProviderProps = Pick<BasePaginationProps, 'pagesCount'> &
  Partial<BasePaginationProps> & {
    selectedPage?: number
    onSelectedPageChange?: (pageNumber: number) => void
    visibleElementsCount?: TVisibleElementsCount
  }

export interface PaginationProps extends PaginationProviderProps {
  colorScheme?: TcolorScheme
  css?: CSS
}
