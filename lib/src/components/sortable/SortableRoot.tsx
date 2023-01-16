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

import {
  arrayMove,
  sortableKeyboardCoordinates,
  SortableContext
} from '@dnd-kit/sortable'
import * as React from 'react'

type SortableRootProps = {
  sortableIds: React.ReactText[]
  onSortChange: (onSortChangeData: { order: UniqueIdentifier[], oldIndex: number, newIndex: number }) => void
}

export const SortableRoot: React.FC<SortableRootProps> = ({
  sortableIds,
  onSortChange,
  children
}) => {
  const [order, setOrder] = React.useState<React.ReactText[]>(sortableIds)
  React.useEffect(() => {
    setOrder(sortableIds)
  }, [sortableIds])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id && over?.id && active.id !== over?.id) {
      setOrder((order) => {
        const oldIndex = order.indexOf(active.id)
        const newIndex = order.indexOf(over.id)
        const newOrder = arrayMove(order, oldIndex, newIndex)
        onSortChange({ order: newOrder, oldIndex, newIndex })
        return newOrder
      })
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
