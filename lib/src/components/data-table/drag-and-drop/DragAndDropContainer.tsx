import { useDataTable } from '../DataTableContext'
import type { TableData } from '../DataTable.types'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import * as React from 'react'

type DragAndDropContainerProps = {
  idColumn?: string
  onChange?: (oldIndex: number, newIndex: number, newData: TableData) => void
}
export const DragAndDropContainer: React.FC<DragAndDropContainerProps> = ({
  idColumn = 'id',
  onChange = undefined,
  children
}) => {
  const { data, setData, setIsDragAndDrop } = useDataTable()

  const rowOrder = React.useMemo(
    () =>
      data.results.map((row) => {
        const id = row[idColumn]
        if (id === undefined)
          console.error(
            'To ensure drag-and-drop works correctly, please ensure that each row has a unique ID. Use the `id` property or pass DataTable an `idColumn` prop that defines the ID property on the rows.'
          )
        return id as UniqueIdentifier
      }),
    [data]
  )

  React.useEffect(() => {
    setIsDragAndDrop(true)
  }, [])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setData((data) => {
        const oldIndex = rowOrder.indexOf(active[idColumn])
        const newIndex = rowOrder.indexOf(over[idColumn])
        const results = arrayMove(data.results, oldIndex, newIndex)
        onChange?.(oldIndex, newIndex, results)
        return { results, total: results.length }
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={rowOrder} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
