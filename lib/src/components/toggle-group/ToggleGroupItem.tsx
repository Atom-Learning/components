import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { styled } from '~/stitches'
import { focusVisibleStyleBlock } from '~/utilities'

export const StyledItem = styled(ToggleGroup.Item, {
  bg: 'white',
  color: '$tonal400',
  border: '1px solid $tonal200',
  cursor: 'pointer',
  '&::before': {
    background: '$tonal200'
  },
  '&:not([disabled])': {
    '&:hover, &:focus-visible, &[data-state="on"]': {
      '&::before': {
        background: 'none'
      }
    },
    '&:hover': {
      borderColor: 'currentColor !important',
      color: '$primary900'
    },
    '&:focus-visible': {
      ...focusVisibleStyleBlock(),
      '&[data-state="off"]': {
        borderColor: '$tonal200 !important'
      },
      '&[data-state="on"]': {
        boxShadow: `inset currentColor 0px 0px 0px 1px, ${
          focusVisibleStyleBlock().boxShadow
        }`
      }
    }
  },
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&[data-state="on"]': {
    color: '$primary800',
    borderColor: 'currentColor !important',
    boxShadow: 'inset currentColor 0px 0px 0px 1px'
  }
})

export const ToggleGroupItem = StyledItem
