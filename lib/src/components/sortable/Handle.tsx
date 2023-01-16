import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { styled } from '../../stitches'
import { DragHandle } from '@atom-learning/icons'
import * as React from 'react'

export const StyledHandle = styled(ActionIcon, {
  color: 'inherit !important',
  fill: 'currentColor',
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed',
    ['*']: {
      pointerEvents: 'none'
    }
  },
  variants: {
    isDragging: {
      true: {
        cursor: 'grabbing'
      },
      false: {
        cursor: 'grab'
      }
    }
  }
})

type HandleProps = Omit<React.ComponentProps<typeof StyledHandle>, 'children'> &
  Pick<React.ComponentProps<typeof Icon>, 'size'>

export const Handle: React.ForwardRefExoticComponent<HandleProps> =
  React.forwardRef(({ isDragging, size, ...rest }, ref) => {
    return (
      <StyledHandle
        ref={ref}
        isDragging={isDragging}
        appearance="simple"
        {...rest}
      >
        <Icon is={DragHandle} size={size} />
      </StyledHandle>
    )
  })
