import { useDataTable } from '../DataTableContext'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useState } from 'react'
import * as React from 'react'

const orientationToDirection = (orientation) =>
  orientation === 'vertical' ? 'column' : 'row'

export const DragAndDropContainer = ({
  as,
  children,
  onSortChange,
  orientation,
  ...rest
}) => {
  const { setData } = useDataTable()
  const direction = orientationToDirection(orientation)
  const [activeId, setActiveId] = useState(null)
  const [order, setOrder] = useState<number[]>([])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event) {
    const { active, over } = event
    if (active.id !== over.id) {
      setData((data) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  function handleDragCancel() {
    setActiveId(null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
    >
      {children}
    </DndContext>
  )
}
