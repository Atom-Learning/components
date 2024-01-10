import { Item } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'

export const itemStyles = {
  alignItems: 'center',
  color: '$tonal600',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$body',
  fontWeight: 400,
  position: 'relative',
  px: '$3',
  py: '$2',
  '&[disabled]': { ...disabledStyle, pointerEvents: 'none' },
  '&[aria-current="page"], &:focus': {
    '&::before': {
      borderLeft: '2px solid currentColor',
      content: '',
      height: '$2',
      left: 0,
      outline: 'none',
      position: 'absolute',
      transform: 'scale(1)'
    }
  },
  '&:focus': {
    color: '$primary900',
    outline: 'none'
  },
  '&:hover': { textDecoration: 'underline' }
}

export const DropdownMenuItem = styled(Item, itemStyles)
