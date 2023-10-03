import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  VIEW_ALL_POPOVER
} from './pagination.constants'

export type TPaginationItemsToRender = (
  | number
  | typeof VIEW_ALL_POPOVER
  | typeof GO_TO_PREVIOUS_PAGE
  | typeof GO_TO_NEXT_PAGE
)[]

interface ILabels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface IBasePagination {
  pagesCount: number
  indicatedPages: number[]
  disabledPages: number[]
  paginationItems: TPaginationItemsToRender
  labels: ILabels
  onItemHover: (pageNumber: number) => void
}

export type TVisibleElementsCount = 6 | 8

export interface IPaginationItemProps {
  pageNumber: number
  css?: CSS
}
export interface IPaginationContext extends IBasePagination {
  currentPage: number
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  nextAvailablePage?: number
  previousAvailablePage?: number
}

export type TPaginationProviderProps = Pick<IBasePagination, 'pagesCount'> &
  Partial<IBasePagination> & {
    selectedPage?: number
    onSelectedPageChange?: (pageNumber: number) => void
    visibleElementsCount?: TVisibleElementsCount
  }

export interface IPaginationProps extends TPaginationProviderProps {
  colorScheme?: TcolorScheme
  css?: CSS
}
