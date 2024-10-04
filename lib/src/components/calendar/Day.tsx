import { styled } from '~/stitches'

export const Day = styled('button', {
  bg: 'transparent',
  border: 'none',
  borderRadius: '$round',
  color: '$grey900',
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: '$sm',
  size: '$3',
  p: 0,
  transition: 'all 75ms',
  '&:hover': {
    bg: '$grey200'
  },
  '&:active': {
    color: 'white',
    bg: '$primary800'
  },
  '&:focus': {
    outline: '2px solid $primary800',
    outlineOffset: '2px'
  },
  '&[disabled]': {
    opacity: '0.3',
    cursor: 'default'
  },
  variants: {
    isSelected: {
      true: {
        bg: '$primary800',
        color: 'white',
        '&:hover': { bg: '$primary800' }
      }
    },
    isToday: {
      true: { bg: '$grey200' }
    },
    isOutsideMonth: {
      true: { color: '$grey600' }
    }
  }
})
