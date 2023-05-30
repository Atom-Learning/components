import { CSS } from '@stitches/react'
import * as React from 'react'

import { Text } from '../text'
import { useDataTable } from './index'

interface IDataTableMetaDataProps {
  css?: CSS
}

export const DataTableMetaData: React.FC<IDataTableMetaDataProps> = ({
  css
}) => {
  const { getState, columns, getRowModel } = useDataTable()
  const { sorting } = getState()
  const isSorted = sorting.length > 0

  const totalRows = getRowModel()?.rows?.length

  const getColumnDisplayName = (id: string) => {
    const sortedColumn = columns.find((col) => col.id === id)
    return sortedColumn?.header
  }

  const getSortingString = (sorting) => {
    return `- Sorted by ${getColumnDisplayName(sorting[0].id)} ${
      sorting[0].desc ? 'descending' : 'ascending'
    }`
  }

  return (
    <Text css={{ fontWeight: 600, ...css }}>{`${totalRows} items ${
      isSorted ? getSortingString(sorting) : ''
    }`}</Text>
  )
}
