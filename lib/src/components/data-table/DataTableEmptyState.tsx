import * as React from 'react'

import { EmptyState } from '../empty-state'
import { useDataTable } from './DataTableContext'
type DataTableEmptyStateProps = React.ComponentProps<typeof EmptyState>

export const DataTableEmptyState: React.FC<DataTableEmptyStateProps> = ({
  children
}) => {
  const { getTotalRows } = useDataTable()

  if (getTotalRows() !== 0) return null

  return <EmptyState>
    {children}
  </EmptyState>
}
