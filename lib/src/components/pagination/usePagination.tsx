import * as React from 'react'

import { PaginationContext } from './pagination-context/PaginationContext'
import type { PaginationContextValue } from './types'

export const usePagination = (): PaginationContextValue => {
  const context = React.useContext(PaginationContext)

  if (!context) {
    throw new Error(
      'Ensure that you wrap any components with the PaginationProvider component'
    )
  }

  return context
}
