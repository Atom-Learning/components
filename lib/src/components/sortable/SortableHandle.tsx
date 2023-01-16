import * as React from 'react'
import { Handle as DragHandle } from './Handle'
import { useSortable } from '@dnd-kit/sortable'

export type SortableHandleProps = {
  targetId: React.ReactText,
  disabled?: boolean
}

export const SortableHandle: React.FC<SortableHandleProps> = ({
  targetId,
  disabled = false,
  ...rest
}) => {
  const { attributes, listeners, isDragging, setActivatorNodeRef } = useSortable({ id: targetId })

  return <DragHandle
    ref={setActivatorNodeRef}
    isDragging={isDragging}
    label="drag handle"
    disabled={disabled}
    {...(!disabled ? listeners : {})}
    {...(!disabled ? attributes : {})}
    {...rest}
  />
}
