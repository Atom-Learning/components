import * as React from 'react'

import { styled } from '../../stitches'
import { ToggleGroup } from '../toggle-group'
import { useSegmentedControl } from './SegmentedControlContext'

const StyledItem = styled(ToggleGroup.Item, {
  bg: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  borderRadius: '$2 !important',
  boxShadow: 'none',
  variants: {
    size: {
      sm: {
        p: '$4 $24',
        gap: '$3',
        maxWidth: '203px'
      },
      md: {
        p: '$24 $5',
        gap: '$4',
        maxWidth: '256px'
      },
      lg: {
        p: '$24 $5',
        gap: '$4',
        maxWidth: '306px'
      }
    }
  },
  '&[data-state=on]': {
    bg: 'white',
    boxShadow: 'none'
  },
  '&:hover[data-state=off]': {
    bg: '$primary300'
  },
  '$:focus': {
    boxShadow: '$primary'
  },
  '&[disabled]': {
    opacity: 0.3
  },
  '&:active': {
    bg: '$primary100'
  }
})

export const SegmentedControlItem = (
  props: Omit<React.ComponentProps<typeof StyledItem>, 'size'>
): JSX.Element => {
  const { size } = useSegmentedControl()

  return <StyledItem {...props} size={size} />
}
