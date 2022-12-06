import * as React from 'react'

import { AsyncDataState, DataTableContextType } from './DataTable.types'
import { useDataTable } from './DataTableContext'

type TDataTableErrorProps = Omit<React.FC, 'children'> & {
  children: (retry?: DataTableContextType['runAsyncData']) => React.ReactElement
}

export const DataTableError: React.FC<TDataTableErrorProps> = ({
  children
}) => {
  const { asyncDataState, runAsyncData } = useDataTable()

  if (asyncDataState !== AsyncDataState.REJECTED) return null

  return children(runAsyncData)
}
