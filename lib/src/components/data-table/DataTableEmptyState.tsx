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

  if (asyncDataState !== AsyncDataState.PENDING && getTotalRows() !== 0)
    return null

  return <EmptyState {...rest}>{children}</EmptyState>
}
