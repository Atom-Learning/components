import { useSortable } from '@dnd-kit/sortable'
import * as React from 'react'

import { Handle as DragHandle, THandleProps } from './Handle'

export type TSortableHandleProps = {
  targetId: React.ReactText
  disabled?: boolean
  label?: string
} & Omit<THandleProps, 'label'>

export const SortableHandle = ({
  targetId,
  disabled = false,
  label = 'drag handle',
  ...rest
}: TSortableHandleProps) => {
  const { attributes, listeners, isDragging, setActivatorNodeRef } =
    useSortable({ id: targetId })

  return (
    <DragHandle
      ref={setActivatorNodeRef}
      isDragging={isDragging}
      label={label}
      disabled={disabled}
      {...(!disabled ? listeners : {})}
      {...(!disabled ? attributes : {})}
      {...rest}
    />
  )
}

SortableHandle.displayName = 'SortableHandle'
