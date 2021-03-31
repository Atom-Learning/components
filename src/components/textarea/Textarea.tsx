import * as React from 'react'

import { styled } from '~/stitches'

const StyledTextarea = styled('textarea', {
  appearance: 'none',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  boxShadow: 'none', // remove iOS default styling
  color: '$tonal900',
  fontFamily: '$sans',
  fontSize: '$md', // prevent iOS zooming on focus
  fontWeight: 400,
  lineHeight: 1.4,
  minHeight: '$6',
  px: '$3',
  py: 'calc($2 + $1)', // offset the line height of the text
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

export type TextareaProps = React.ComponentProps<typeof StyledTextarea>

export const Textarea: React.FC<TextareaProps> = React.forwardRef(
  (props, ref) => <StyledTextarea {...props} ref={ref} />
)

Textarea.displayName = 'Textarea'
