import * as React from 'react'

import { CSS } from '~/stitches'

import { Flex } from '../flex'
import { AsyncDataState, DataTableContextType } from './DataTable.types'
import { useDataTable } from './DataTableContext'

type TDataTableErrorProps = Omit<React.FC, 'children'> & {
  css?: CSS
  children: (retry: DataTableContextType['runAsyncData']) => React.ReactNode
}

export const DataTableError: React.FC<TDataTableErrorProps> = ({
  css,
  children
}) => {
  const { asyncDataState, runAsyncData } = useDataTable()

  if (asyncDataState !== AsyncDataState.REJECTED) return null

  return (
    <Flex
      css={{
        flexDirection: 'column',
        alignItems: 'center',
        p: '$5',
        bg: '$background',
        ...css
      }}
    >
      {children(runAsyncData)}
    </Flex>
  )
}
