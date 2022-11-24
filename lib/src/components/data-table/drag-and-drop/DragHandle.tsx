import { useSortable } from '@dnd-kit/sortable'
import * as React from 'react'

import { Handle } from './Handle'

interface HandleProps {
  targetId: string | number
  label: string
}

export const DragHandle: React.FC<HandleProps> = React.memo(
  ({ targetId, ...rest }) => {
    const { isDragging, listeners, setActivatorNodeRef } = useSortable({
      id: targetId
    })

    return (
      <Handle
        ref={setActivatorNodeRef}
        isDragging={isDragging}
        {...listeners}
        {...rest}
      />
    )
  }
)
