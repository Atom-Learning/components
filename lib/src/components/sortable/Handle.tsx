import { DragHandle } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '../../stitches'
import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'

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

export type THandleProps = Omit<
  React.ComponentProps<typeof StyledHandle>,
  'children'
> &
  Pick<React.ComponentProps<typeof Icon>, 'size'>

export const Handle: React.ForwardRefExoticComponent<THandleProps> =
  React.forwardRef(({ isDragging, size, ...rest }, ref) => {
    return (
      <StyledHandle
        ref={ref}
        isDragging={isDragging}
        appearance="simple"
        hasTooltip={false}
        size={size}
        {...rest}
      >
        <Icon is={DragHandle} />
      </StyledHandle>
    )
  })

Handle.displayName = 'Handle'
