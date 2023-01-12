import { useDataTable } from '../DataTableContext'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  sortableKeyboardCoordinates,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import * as React from 'react'

export const DragAndDropContainer: React.FC = ({ children }) => {
  const { idColumn, onDragAndDrop, rowOrder, setData } = useDataTable()

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
        onDragAndDrop?.(oldIndex, newIndex, results)
        return { results, total: results.length }
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={() => console.log('start')}
      onDragMove={() => console.log('move')}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={rowOrder} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
