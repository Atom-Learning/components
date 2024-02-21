import * as React from 'react'

import { AsyncDataState, DataTableContextType } from './DataTable.types'
import { useDataTable } from './DataTableContext'

export const DataTableError = ({
  children
}: {
  children: (retry?: DataTableContextType['runAsyncData']) => React.ReactElement
}) => {
  const { asyncDataState, runAsyncData } = useDataTable()

  if (asyncDataState !== AsyncDataState.REJECTED) return null

  return children(runAsyncData)
}
