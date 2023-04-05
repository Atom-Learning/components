import * as React from 'react'

import { EmptyState } from '../empty-state'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'

type DataTableEmptyStateProps = React.ComponentProps<typeof EmptyState>

export const DataTableEmptyState: React.FC<DataTableEmptyStateProps> = ({
  children,
  ...rest
}) => {
  const { asyncDataState, getTotalRows } = useDataTable()

  const isPending = asyncDataState === AsyncDataState.PENDING
  const isEmpty = !isPending && getTotalRows() === 0

  if (!isEmpty) return null

  return <EmptyState {...rest}>{children}</EmptyState>
}
