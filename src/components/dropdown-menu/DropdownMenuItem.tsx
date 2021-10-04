import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

export const itemStyles = {
  alignItems: 'center',
  color: '$tonal800',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 400,
  tabIndex: 0,
  px: '$2',
  '&:not(:last-child)': { mb: '$2' },
  // These focus styles are only applying when keyboard 
  // navigation is used to focus an item
  '&:focus': {
    backgroundColor: 'hotpink'
  },
  '&[data-disabled]': {
    color: '$tonal100',
    pointerEvents: 'none'
  }
}

export const DropdownMenuItem = styled(Item, itemStyles)
