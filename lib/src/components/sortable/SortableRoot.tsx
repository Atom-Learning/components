import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import * as React from 'react'

type TSortableRootProps = {
  sortableIds: React.ReactText[]
  onSortChange: (onSortChangeData: {
    order: UniqueIdentifier[]
    oldIndex: number
    newIndex: number
  }) => void
}

export const SortableRoot = ({
  sortableIds,
  onSortChange,
  children
}: React.PropsWithChildren<TSortableRootProps>) => {
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={order}>{children}</SortableContext>
    </DndContext>
  )
}

SortableRoot.displayName = 'SortableRoot'
