import * as React from 'react'

import { styled } from '~/stitches'

import { Loader } from '../loader'
import { AsyncDataState } from './DataTable.types'
import { useDataTable } from './DataTableContext'

const PendingState = styled(Loader, {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1
})

export const DataTableLoading: React.FC<
  React.ComponentProps<typeof PendingState>
> = (props) => {
  const { asyncDataState } = useDataTable()

  if (asyncDataState !== AsyncDataState.PENDING) return null

  return <PendingState {...props} />
}
