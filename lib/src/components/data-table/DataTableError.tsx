import * as React from 'react'

import { AsyncDataState, DataTableContextType } from './DataTable.types'
import { useDataTable } from './DataTableContext'

interface IDataTableErrorProps {
  children: (retry?: DataTableContextType['runAsyncData']) => React.ReactElement
}

export const DataTableError: React.FC<IDataTableErrorProps> = ({
  children
}) => {
  const { asyncDataState, runAsyncData } = useDataTable()

  if (asyncDataState !== AsyncDataState.REJECTED) return null

  return children(runAsyncData)
}
