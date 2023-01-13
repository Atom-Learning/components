import * as React from 'react'

import { Table } from '../../table'
import { DataTable } from '../DataTable'
import { AsyncDataState, TAsyncDataResult } from '../DataTable.types'
import { useDataTable } from '../DataTableContext'
import { DataTableLoading } from '../DataTableLoading'
import { DragAndDropContainer } from './DragAndDropContainer'
import type { DataTableTableProps } from '../DataTableTable'

type DragAndDropTableProps = DataTableTableProps & {
  idColumn?: string
  onDragAndDrop?: (
    oldIndex: number,
    newIndex: number,
    newData: Record<string, unknown>[]
  ) => void
}

export const DragAndDropTable: React.FC<DragAndDropTableProps> = ({
  idColumn,
  onDragAndDrop,
  sortable,
  striped,
  theme,
  css,
  ...props
}) => {
  const { asyncDataState } = useDataTable()
  const isPending = asyncDataState === AsyncDataState.PENDING

  return (
    <DragAndDropContainer onChange={onDragAndDrop} idColumn={idColumn}>
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
        <DragAndDropTable striped={striped} />
      </Table>
    </DragAndDropContainer>
  )
}
