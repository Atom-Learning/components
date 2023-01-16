import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'
import { Box } from '../box'
import { Sortable } from '../sortable'
import * as React from 'react'

export const StyledItem = styled(Box, {
  borderRadius: '$0',
  ['--scale']: 1,
  bg: 'white',
  color: '$tonal400',
  border: '1px solid $tonal200',
  '&:not([disabled])': {
    '&:hover': {
      borderColor: 'currentColor !important',
      color: '$primaryMid'
    },
    '&:focus-visible': focusVisibleStyleBlock(),
    '&[data-dragging="true"]': {
      ['--scale']: 1.1,
      boxShadow: '0 1px 4px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1)',
    },
  }
})

export interface ItemProps {
  id: React.ReactText
  disabled?: boolean
  asHandle?: boolean
  style?: React.CSSProperties
}

export const Item: React.FC<ItemProps & typeof StyledItem> = React.memo(
  ({ id, disabled, asHandle, ...rest }) => {
    return (
      <Sortable.Item id={id} asChild isDragHandle={asHandle} disabled={disabled}>
        <StyledItem
          as={asHandle ? 'button' : 'div'}
          {...rest} />
      </Sortable.Item>
    )
  }
)
