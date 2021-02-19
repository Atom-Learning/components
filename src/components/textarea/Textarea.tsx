import { styled } from '~/stitches'

export const Textarea = styled('textarea', {
  appearance: 'none',
  borderRadius: '$0',
  border: '1px solid $tonal500',
  boxShadow: 'none', // necessary to remove iOS default styling
  fontFamily: '$sans',
  fontSize: '$md', // necessary to prevent iOS zooming on focus
  fontWeight: 400,
  letterSpacing: '0.01em',
  lineHeight: 1.4,
  minHeight: 100,
  resize: 'vertical',
  width: '100%',
  color: '$tonal900',
  py: '$3',
  px: '$2',
  transition: 'all 75ms ease-out',
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $color$primary900',
    borderColor: '$primary900',
    outline: 'none'
  },
  '&[disabled]': {
    opacity: 0.7,
    backgroundColor: '$tonal300'
  }
})

Textarea.displayName = 'Textarea'
