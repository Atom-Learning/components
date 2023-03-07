import type { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { Slot } from '@radix-ui/react-slot'
import { CSS, styled } from '@stitches/react'
import * as React from 'react'

import { Box } from '../box'

export type TSortableItemProps = {
  id: UniqueIdentifier
  asChild?: boolean
  isDragHandle?: boolean
  disabled?: boolean
  css?: CSS
}

const StyledSlot = styled(Slot)

export const SortableItem: React.FC<TSortableItemProps> = ({
  id,
  asChild = false,
  css,
  isDragHandle = false,
  disabled,
  ...rest
}) => {
  const { transform, setNodeRef, isDragging, listeners, attributes } =
    useSortable({ id })

  const Component = asChild ? StyledSlot : Box
  return (
    <Component
      ref={setNodeRef}
      css={{
        ['--scale']: 1,
        transform:
          'translateX(calc(var(--translate-x)  * 1px)) translateY(calc(var(--translate-y)  * 1px)) scale(var(--scale))',
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
      data-disabled={disabled}
      {...(isDragHandle && !disabled ? listeners : {})}
      {...(isDragHandle && !disabled ? attributes : {})}
      {...rest}
    />
  )
}

SortableItem.displayName = 'SortableItem'
