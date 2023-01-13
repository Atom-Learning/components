import { useDataTable } from '../DataTableContext'
import type { TAsyncDataResult, TableData } from '../DataTable.types'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragEndEvent
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

// These two funcs are exported for testing purposes. This is a non-ideal workaround to the lack of support for drag-and-drop events
// in the unit test JS environment.
export const updateData = (
  rowOrder: Array<UniqueIdentifier>,
  data: TAsyncDataResult,
  event: { active: { id: UniqueIdentifier }; over: { id: UniqueIdentifier } },
  idColumn: UniqueIdentifier,
  onChange?: (oldIndex: number, newIndex: number, newData: TableData) => void
) => {
  const { active, over } = event
  const oldIndex = rowOrder.indexOf(active[idColumn])
  const newIndex = rowOrder.indexOf(over?.[idColumn])
  const results = arrayMove(data.results, oldIndex, newIndex)
  onChange?.(oldIndex, newIndex, results)
  return { results, total: results.length }
}

export const getRowOrder = (data: TAsyncDataResult, idColumn: string) =>
  data.results.map((row) => {
    const id = row[idColumn]
    if (id === undefined)
      throw new Error(
        'To ensure drag-and-drop works correctly, please ensure that each row has a unique ID. Use the `id` property or pass DataTable an `idColumn` prop that defines the ID property on the rows.'
      )
    return id as UniqueIdentifier
  })
export const DragAndDropContainer: React.FC<DragAndDropContainerProps> = ({
  idColumn = 'id',
  onChange = undefined,
  children
}) => {
  const { data, setData, setIsDragAndDrop } = useDataTable()

  const rowOrder = React.useMemo(() => getRowOrder(data, idColumn), [data])

  React.useEffect(() => {
    setIsDragAndDrop(true)
  }, [])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id && over?.id && active.id !== over?.id) {
      setData((data) => {
        return updateData(rowOrder, data, { active, over }, idColumn, onChange)
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
