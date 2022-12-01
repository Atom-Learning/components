import * as React from 'react'

import { CSS } from '~/stitches'

import { Flex } from '../flex'
import { ApiQueryStatus, TFetcherOptions } from './DataTable.types'
import { useDataTable } from './RemoteDataTableContext'

type TDataTableErrorProps = Omit<React.FC, 'children'> & {
  css?: CSS
  children: (
    retry?: (options: TFetcherOptions) => Promise<void>
  ) => React.ReactNode
}

export const DataTableError: React.FC<TDataTableErrorProps> = ({
  css,
  children
}) => {
  const { apiQueryStatus, doFetchData } = useDataTable()

  if (apiQueryStatus !== ApiQueryStatus.FAILED) return null

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
      {children(doFetchData)}
    </Flex>
  )
}
