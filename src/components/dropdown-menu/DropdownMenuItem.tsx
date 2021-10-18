import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

export const itemStyles = {
  alignItems: 'center',
  color: '$tonal800',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 400,
  position: 'relative',
  px: '$3',
  '&:not(:last-child)': { mb: '$3' },

  '&[data-disabled]': {
    color: '$tonal100',
    pointerEvents: 'none'
  },
  '&[aria-current="page"], &:focus': {
    '&::before': {
      borderLeft: '2px solid currentColor',
      content: '',
      height: '100%',
      left: 0,
      outline: 'none',
      position: 'absolute',
      transform: 'scale(1)'
    }
  },
  '&:focus': {
    color: '$primaryMid',
    outline: 'none'
  }
}

export const DropdownMenuItem = styled(Item, itemStyles)
