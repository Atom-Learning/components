import type { SortingState } from '@tanstack/react-table'
import React from 'react'

import { TDefaultSort } from './DataTable.types'
export const useSortByColumn = (defaultSort: TDefaultSort | undefined) => {
  const [isSortable, setIsSortable] = React.useState<boolean>(false)

  const [sorting, setSorting] = React.useState<SortingState>(
    defaultSort
      ? [
          {
            id: defaultSort.column,
            desc: defaultSort.direction === 'desc'
          }
        ]
      : []
  )

  return { isSortable, setIsSortable, sorting, setSorting }
}
