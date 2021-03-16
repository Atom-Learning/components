import { styled } from '~/stitches'

export const Textarea = styled('textarea', {
  appearance: 'none',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  boxShadow: 'none', // necessary to remove iOS default styling
  color: '$tonal900',
  fontFamily: '$sans',
  fontSize: '$md', // necessary to prevent iOS zooming on focus
  fontWeight: 400,
  letterSpacing: '0.01em',
  lineHeight: 1.4,
  minHeight: 100,
  px: '$3',
  py: '$2',
  resize: 'vertical',
  transition: 'all 75ms ease-out',
  width: '100%',
  '&:focus': {
    borderColor: '$primary900',
    boxShadow: 'inset 0 0 0 1px $colors$primary900',
    outline: 'none'
  },
  '&[disabled]': {
    opacity: 0.7,
    backgroundColor: '$tonal300'
  }
})

Textarea.displayName = 'Textarea'
