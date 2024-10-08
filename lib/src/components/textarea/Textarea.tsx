import * as React from 'react'

import { styled } from '~/stitches'

const StyledTextarea = styled('textarea', {
  boxShadow: 'none', // remove iOS default styling
  fontSize: '$md', // prevent iOS zooming on focus
  appearance: 'none',
  border: '1px solid $grey800',
  borderRadius: '$0',
  boxSizing: 'border-box',
  color: '$grey1000',
  fontFamily: '$body',
  fontWeight: 400,
  lineHeight: 1.4,
  minHeight: '$7',
  px: '$3',
  py: 'calc($2 + $1)', // offset the line height of the text
  resize: 'vertical',
  transition: 'all 75ms ease-out',
  width: '100%',
  '&:focus': {
    borderColor: '$primary800',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$grey200',
    color: '$grey800',
    cursor: 'not-allowed'
  },
  '&::placeholder': {
    color: '$grey700',
    opacity: 1
  },
  variants: {
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

export type TextareaProps = React.ComponentProps<typeof StyledTextarea>

export const Textarea: React.ForwardRefExoticComponent<TextareaProps> =
  React.forwardRef((props, ref) => <StyledTextarea {...props} ref={ref} />)

Textarea.displayName = 'Textarea'
