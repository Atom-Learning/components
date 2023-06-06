import { TcolorScheme } from '../../experiments/color-scheme'
import { CSS } from '../../stitches'

interface ILabels {
  popoverTriggerLabel?: string
  nextPageButtonLabel?: string
  previousPageButtonLabel?: string
}

interface IBasePagination {
  pagesCount: number
  visibleElementsCount: TVisibleElementsCount
  indicatedPages: number[]
  disabledPages: number[]
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
  isMaxVisibleElementCount: boolean
  goToPage: (pagenumber: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
}

export type TPaginationProviderProps = Pick<IBasePagination, 'pagesCount'> &
  Partial<IBasePagination> & {
    selectedPage?: number
    onSelectedPageChange?: (pageNumber: number) => void
  }

export interface IPaginationProps extends TPaginationProviderProps {
  colorScheme?: TcolorScheme
  css?: CSS
}
