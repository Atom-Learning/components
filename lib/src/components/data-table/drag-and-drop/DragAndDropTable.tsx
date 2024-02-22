import { arrayMove } from '@dnd-kit/sortable'
import * as React from 'react'

import { Sortable } from '../../sortable'
import { Table } from '../../table'
import { DataTable } from '../DataTable'
import { AsyncDataState, TAsyncDataResult } from '../DataTable.types'
import { useDataTable } from '../DataTableContext'
import { DataTableLoading } from '../DataTableLoading'
import type { DataTableTableProps } from '../DataTableTable'
import { DragAndDropTableBody } from './DragAndDropTableBody'

type DragAndDropTableProps = DataTableTableProps & {
  idColumn?: string
  onDragAndDrop?: (onDragAndDropData: {
    oldIndex: number
    newIndex: number
    newData: TAsyncDataResult
  }) => void
}

export const DragAndDropTable = ({
  idColumn = 'id',
  onDragAndDrop,
  sortable,
  striped,
  theme,
  css,
  ...props
}: DragAndDropTableProps) => {
  const { asyncDataState, data, setData } = useDataTable()
  const isPending = asyncDataState === AsyncDataState.PENDING

  const rowIds = React.useMemo(
    () =>
      data.results.map((row) => {
        return row[idColumn] as React.ReactText
      }),
    [data]
  )
  const handleSortChange = React.useCallback(
    ({ oldIndex, newIndex }) => {
      const sortedResults = arrayMove(data.results, oldIndex, newIndex)
      const newData = { results: sortedResults, total: data.total }
      setData({ results: sortedResults, total: data.total })
      onDragAndDrop?.({ oldIndex, newIndex, newData })
    },
    [data, onDragAndDrop]
  )

  return (
    <Sortable.Root onSortChange={handleSortChange} sortableIds={rowIds}>
      <DataTableLoading />
      <Table
        {...props}
        css={{
          ...css,
          ...(isPending && {
            opacity: 0.5,
            pointerEvents: 'none',
            transition: 'opacity 250ms linear 150ms'
          })
        }}
      >
        <DataTable.Head theme={theme} sortable={sortable} />
        <DragAndDropTableBody striped={striped} idColumn={idColumn} />
      </Table>
    </Sortable.Root>
  )
}
