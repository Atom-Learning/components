import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'
import { Box } from '..'

export type TPages = {
  pageNumber: number
}
interface ILabels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface TBasePaginationType {
  visibleElementsCount?: TVisibleElementsCount
  indicatedPages?: number[]
  disabledPages?: number[]
  onItemHover?: (pageNumber: number) => void
  labels?: ILabels
}

export type TVisibleElementsCount = 6 | 8

export type TPaginationProps = React.ComponentProps<typeof Box> &
  TPaginationProviderProps & {
    colorScheme?: TcolorScheme
  }

export type TPaginationProviderProps = {
  onSelectedPageChange: (pageNumber: number) => void
  pagesCount: number
  selectedPage?: number
} & TBasePaginationType

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

export interface IPaginationNavigationButtonProps {
  css?: CSS
  label?: string
}
