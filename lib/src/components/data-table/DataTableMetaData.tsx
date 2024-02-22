import { CSS } from '@stitches/react'
import * as React from 'react'

import { Text } from '../text'
import { useDataTable } from './index'

const defaultCopy = {
  sorted_by: 'Sorted by',
  ascending: 'ascending',
  descending: 'descending',
  separator: '-'
}

export const DataTableMetaData = ({
  copy,
  css
}: {
  copy?: {
    sorted_by?: string
    ascending?: string
    descending?: string
    separator?: string
  }
  sortLabel?: string
  css?: CSS
}) => {
  const { getState, columns, getRowModel, rowSelection } = useDataTable()
  const { sorting } = getState()
  const isSorted = sorting.length > 0

  const totalRows = getRowModel()?.rows?.length

  const selectedRows = Object.keys(rowSelection || {}).length

  const copyMerged = { ...defaultCopy, ...copy }

  const getColumnDisplayName = (id: string) => {
    const sortedColumn = columns.find((col) => col.id === id)
    return sortedColumn?.header || id
  }

  const getSortingString = (sorting) => {
    return `${copyMerged.separator} ${
      copyMerged.sorted_by
    } ${getColumnDisplayName(sorting[0].id)} ${
      sorting[0].desc ? copyMerged.descending : copyMerged.ascending
    }`
  }

  return (
    <Text css={{ fontWeight: 600, ...css }}>{`${selectedRows || totalRows} ${
      (selectedRows || totalRows) === 1 ? 'item' : 'items'
    } ${selectedRows ? 'selected' : ''} ${
      isSorted ? getSortingString(sorting) : ''
    }`}</Text>
  )
}
