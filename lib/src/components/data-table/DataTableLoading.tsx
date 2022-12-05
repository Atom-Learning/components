import * as React from 'react'

import { CSS } from '~/stitches'

import { Loader } from '../loader'
import { ApiQueryStatus } from './DataTable.types'
import { useDataTable } from './DataTableContext'

interface IDataTableLoadingProps {
  css?: CSS
}

export const DataTableLoading: React.FC<IDataTableLoadingProps> = ({ css }) => {
  const { apiQueryStatus } = useDataTable()
  if (apiQueryStatus !== ApiQueryStatus.PENDING) return null

  return (
    <Loader
      css={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        ...css
      }}
    />
  )
}
