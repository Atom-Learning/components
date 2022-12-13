import * as React from 'react'

import { Table } from '../table'
import { DataTable } from './DataTable'
import { useDataTable } from './DataTableContext'
import { DragAndDropContainer } from './drag-and-drop'
type DataTableTableProps = Omit<
  React.ComponentProps<typeof Table>,
  'children'
> &
  Partial<
    Pick<React.ComponentProps<typeof DataTable.Head>, 'theme' | 'sortable'>
  > &
  Partial<Pick<React.ComponentProps<typeof Table.Body>, 'striped'>>

export const DataTableTable: React.FC<DataTableTableProps> = ({
  sortable,
  striped,
  theme,
  ...props
}) => {
  const { isDragAndDrop } = useDataTable()

  if (isDragAndDrop)
    return (
      <DragAndDropContainer
      // onSortChange={(oldIndex, newIndex, newData) => {
      //   console.log('oldIndex:', oldIndex)
      //   console.log('newIndex:', newIndex)
      //   console.log('newData:', newData)
      // }}
      >
        <Table {...props}>
          <DataTable.Head theme={theme} sortable={sortable} />
          <DataTable.Body striped={striped} />
        </Table>
      </DragAndDropContainer>
    )

  return (
    <Table {...props}>
      <DataTable.Head theme={theme} sortable={sortable} />
      <DataTable.Body striped={striped} />
    </Table>
  )
}
