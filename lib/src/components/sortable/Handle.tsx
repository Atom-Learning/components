import { DragHandle } from '@atom-learning/icons'
import * as React from 'react'

import { ActionIcon } from '../action-icon'
import { Icon } from '../icon'
import { styled } from '../../stitches'

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
        {...rest}
      >
        <Icon is={DragHandle} size={size} />
      </StyledHandle>
    )
  })

Handle.displayName = 'Handle'
