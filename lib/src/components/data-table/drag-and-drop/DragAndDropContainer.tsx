import { useDataTable } from '../DataTableContext'
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

import * as React from 'react'

export const DragAndDropContainer: React.FC = ({ children }) => {
  const { idColumn, onDragAndDrop, order, setData } = useDataTable()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  function handleDragEnd(event) {
    const { active, over } = event
    if (active.id !== over.id) {
      setData((data) => {
        const oldIndex = order.indexOf(active[idColumn])
        const newIndex = order.indexOf(over[idColumn])
        const result = arrayMove(data, oldIndex, newIndex)
        onDragAndDrop?.(oldIndex, newIndex, result)
        return result
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
      {children}
    </DndContext>
  )
}
