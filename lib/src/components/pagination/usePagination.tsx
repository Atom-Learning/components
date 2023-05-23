import * as React from 'react'

import type { TPaginationContext } from './types'
import { PaginationContext } from './pagination-context/PaginationContext'

export const usePagination = (): TPaginationContext => {
  const context = React.useContext(PaginationContext)

  if (!context) {
    throw new Error(
      'Ensure that you wrap any components with the PaginationProvider component'
    )
  }

  return context
}
