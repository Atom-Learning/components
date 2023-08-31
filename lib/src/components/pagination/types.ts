import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'

interface ILabels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface IBasePagination {
  pagesCount: number
  indicatedPages: number[]
  disabledPages: number[]
  paginationItems: number[]
  paginationAlignment: IPaginationAlignment
  labels: ILabels
  onItemHover: (pageNumber: number) => void
}

export type IPaginationAlignment = 'start' | 'end'

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
