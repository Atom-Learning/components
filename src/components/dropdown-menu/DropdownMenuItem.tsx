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
  '&:not(:last-child)': { mb: '$2' },
  // These focus styles are only applying when keyboard
  // navigation is used to focus an item
  '&:focus': {
    color: '$primary',
    outline: 'none',
    '&:before': {
      borderLeft: '2px solid $primary',
      color: 'currentColor',
      content: '',
      height: '100%',
      left: 0,
      position: 'absolute',
      transform: 'scale(1)'
    }
  },
  '&[data-disabled]': {
    color: '$tonal100',
    pointerEvents: 'none'
  },
  variants: {
    active: {
      true: {
        color: '$tertiary',
        '&:before': {
          borderLeft: '2px solid $tertiary',
          color: 'currentColor',
          content: '',
          height: '100%',
          left: 0,
          position: 'absolute',
          transform: 'scale(1)'
        }
      }
    }
  }
}

export const DropdownMenuItem = styled(Item, itemStyles)
