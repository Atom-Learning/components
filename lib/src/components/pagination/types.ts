import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'

interface ILabels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface TBasePaginationType {
  pagesCount: number
  onSelectedPageChange?: (pageNumber: number) => void
  selectedPage?: number
  visibleElementsCount?: TVisibleElementsCount
  indicatedPages?: number[]
  disabledPages?: number[]
  onItemHover?: (pageNumber: number) => void
  labels?: ILabels
}

export type TVisibleElementsCount = 6 | 8

export type TPaginationProps = {
  colorScheme?: TcolorScheme
  css?: CSS
} & TBasePaginationType

export type TPaginationProviderProps = TBasePaginationType

export type TPaginationContext = {
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
  currentPage: number
  pagesCount: number
  isMaxVisibleElementCount: boolean
} & TBasePaginationType

export interface IPaginationItemProps {
  pageNumber: number
  css?: CSS
  onItemHover?: (pageNumber: number) => void
}
