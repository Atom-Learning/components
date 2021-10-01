import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

export const itemStyles = {
  alignItems: 'center',
  color: '$tonal800',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 400,
  px: '$2',
  '&:not(:last-child)': { mb: '$2' },
  '&[data-disabled]': {
    color: '$tonal100',
    pointerEvents: 'none'
  },
  '&:focus': {
    backgroundColor: '$tonal100'
  }
}

export const DropdownMenuItem = styled(Item, itemStyles)
