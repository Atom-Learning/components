import * as React from 'react'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useDataTable } from '../DataTableContext'

export const SortableContainer = ({ children }) => {
  const { order } = useDataTable()

  return (
    <SortableContext items={order} strategy={verticalListSortingStrategy}>
      {children}
    </SortableContext>
  )
}
