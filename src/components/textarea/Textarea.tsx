import * as React from 'react'

import { styled } from '~/stitches'

const StyledTextarea = styled('textarea', {
  appearance: 'none',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  boxShadow: 'none', // remove iOS default styling
  boxSizing: 'border-box',
  color: '$tonal900',
  fontFamily: '$body',
  fontSize: '$md', // prevent iOS zooming on focus
  fontWeight: 500,
  lineHeight: 1.4,
  minHeight: '$6',
  px: '$3',
  py: 'calc($2 + $1)', // offset the line height of the text
  resize: 'vertical',
  transition: 'all 75ms ease-out',
  width: '100%',
  '&:focus': {
    borderColor: '$primary',
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
