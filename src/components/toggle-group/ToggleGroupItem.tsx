import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { styled } from '~/stitches'

// TODO: How do I make this reusable from other components?
const focusIndicatorBlock = ({ position = 'relative', zIndex = 1 } = {}) => {
  return {
    position: ['relative', 'absolute', 'fixed', 'sticky'].includes(position)
      ? position
      : 'relative',
    zIndex: zIndex > 1 ? zIndex : 1,
    boxShadow: 'white 0px 0px 0px 2px, $colors$primary 0px 0px 0px 4px'
  }
}

export const StyledItem = styled(ToggleGroup.Item, {
  bg: 'white',
  color: '$tonal400',
  border: '1px solid $tonal200',
  cursor: 'pointer',
  outline: 'none !important',
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
      color: '$primaryMid'
    },
    '&:focus-visible': {
      ...focusIndicatorBlock(),
      '&[data-state="off"]': {
        borderColor: '$tonal200 !important'
      },
      '&[data-state="on"]': {
        boxShadow: `inset currentColor 0px 0px 0px 1px, ${focusIndicatorBlock().boxShadow
          }`
      }
    }
  },
  '&[disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  '&[data-state="on"]': {
    color: '$primary',
    borderColor: 'currentColor !important',
    boxShadow: 'inset currentColor 0px 0px 0px 1px'
  }
})

export const ToggleGroupItem = StyledItem
