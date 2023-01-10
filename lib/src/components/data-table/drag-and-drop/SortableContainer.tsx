import * as React from 'react'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useDataTable } from '../DataTableContext'

export const SortableContainer = ({ children }) => {
  const { rowOrder } = useDataTable()

  return (
    <SortableContext items={rowOrder} strategy={verticalListSortingStrategy}>
      {children}
    </SortableContext>
  )
}
