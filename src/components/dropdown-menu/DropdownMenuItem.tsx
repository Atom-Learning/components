import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

export const itemStyles = {
  alignItems: 'center',
  color: '$tonal800',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 400,
  tabIndex: 0,
  position: 'relative',
  px: '$2',
  '&:not(:last-child)': { mb: '$3' },

  '&[data-disabled]': {
    color: '$tonal100',
    pointerEvents: 'none'
  },
  '&[aria-current="page"]': {
    '&:before': {
      borderLeft: '2px solid currentColor',
      color: 'currentColor',
      content: '',
      height: '100%',
      left: 0,
      position: 'absolute',
      transform: 'scale(1)'
    }
  },
  '&:focus': {
    color: '$primaryMid',
    outline: 'none',
    '&:before': {
      borderLeft: '2px solid $primaryMid',
      color: 'currentColor',
      content: '',
      height: '100%',
      left: 0,
      position: 'absolute',
      transform: 'scale(1)'
    }
  }
}

export const DropdownMenuItem = styled(Item, itemStyles)
