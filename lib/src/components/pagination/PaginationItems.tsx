import * as React from 'react'

import {
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  VIEW_ALL_POPOVER
} from './pagination.constants'
import { PaginationNextButton } from './PaginationNextButton'
import { PaginationPage } from './PaginationPage'
import { PaginationPopover } from './PaginationPopover'
import { PaginationPreviousButton } from './PaginationPreviousButton'
import { usePagination } from './usePagination'

export const PaginationItems = (): JSX.Element => {
  const { paginationItems } = usePagination()

  return (
    <>
      {paginationItems.map((paginationItem, i) => {
        switch (paginationItem) {
          case VIEW_ALL_POPOVER:
            return <PaginationPopover key={paginationItem + i} />
          case GO_TO_PREVIOUS_PAGE:
            return <PaginationPreviousButton key={paginationItem} />
          case GO_TO_NEXT_PAGE:
            return <PaginationNextButton key={paginationItem} />
          default:
            return (
              <PaginationPage
                key={paginationItem}
                pageNumber={paginationItem}
              />
            )
        }
      })}
    </>
  )
}
