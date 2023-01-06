import { ActionIcon } from '../../action-icon'
import { Icon } from '../../icon'
import { styled } from '../../../stitches'
import { DragHandle } from '@atom-learning/icons'
import * as React from 'react'

export const StyledHandle = styled(ActionIcon, {
  color: 'inherit !important',
  fill: 'currentColor',
  variants: {
    isDragging: {
      true: {
        cursor: 'grab'
      }
    }
  }
})

export const Handle: React.ForwardRefExoticComponent<
  Omit<React.ComponentProps<typeof StyledHandle>, 'children'>
> = React.forwardRef(({ isDragging, size, ...rest }, ref) => {
  return (
    <StyledHandle
      ref={ref}
      isDragging={isDragging}
      appearance="simple"
      size={size}
      {...rest}
    >
      <Icon is={DragHandle} size={size} />
    </StyledHandle>
  )
})
