import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { Box } from '../box'
import { useSortable } from '@dnd-kit/sortable'
import type { UniqueIdentifier } from '@dnd-kit/core'
import { CSS } from '@stitches/react'

export type DataTableSortableItemProps = {
  id: UniqueIdentifier,
  asChild?: boolean,
  isDragHandle?: boolean,
  disabled?: boolean,
  css?: CSS
}

export const SortableItem: React.FC<DataTableSortableItemProps> = ({
  id,
  asChild = false,
  css,
  isDragHandle = false, // usually there will be a separate SortableHandle used to control moving this element
  disabled,
  ...rest
}) => {
  const { transform, setNodeRef, isDragging, listeners, attributes } = useSortable({ id })

  const Component = asChild ? Slot : Box
  return (
    <Component
      ref={setNodeRef}
      css={{
        ['--scale']: 1,
        transform: 'translateX(calc(var(--translate-x)  * 1px)) translateY(calc(var(--translate-y)  * 1px)) scale(var(--scale))',
        zIndex: isDragging ? 5 : undefined,
        ['--translate-x']: transform?.x || 0,
        ['--translate-y']: transform?.y || 0,
        '&[disabled]': {
          opacity: 0.3,
          cursor: 'not-allowed',
          ['*']: {
            pointerEvents: 'none'
          }
        },
        ...(isDragHandle ? { cursor: isDragging ? 'grabbing' : 'grab' } : {}),
        ...css
      }}
      data-dragging={isDragging}
      disabled={disabled}
      {...(isDragHandle && !disabled ? listeners : {})}
      {...(isDragHandle && !disabled ? attributes : {})}
      {...rest}
    />
  )
}
