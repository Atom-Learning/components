import { styled } from '~/stitches'

export const Day = styled('button', {
  bg: 'transparent',
  border: 'none',
  borderRadius: '$round',
  color: '$tonal900',
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: '$sm',
  size: '$3',
  p: 0,
  transition: 'all 75ms',
  '&:hover': {
    bg: '$tonal100'
  },
  '&:active': {
    color: 'white',
    bg: '$primary'
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px'
  },
  variants: {
    isSelected: {
      true: {
        bg: '$primary',
        color: 'white',
        '&:hover': { bg: '$primary' }
      }
    },
    isToday: {
      true: { bg: '$tonal100' }
    },
    isOutsideMonth: {
      true: { color: '$tonal200' }
    }
  }
})
