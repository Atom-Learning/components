import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledInput = styled('input', {
  appearance: 'none',
  border: '1px solid $tonal500',
  borderRadius: '$0',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  color: '$tonal900',
  cursor: 'text',
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$md', // prevent iOS zooming on focus
  height: '$4',
  width: '100%',
  p: '$3',
  transition: 'all 100ms ease-out',
  '&:focus': {
    borderColor: '$primary900',
    boxShadow: 'inset 0 0 0 1px $colors$primary900',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal700',
    cursor: 'not-allowed'
  },
  variants: {
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

// override default 'type' property to prevent Input from being used to render
// checkboxes, radios etc — we will have dedicated components for them
export type InputProps = Override<
  React.ComponentProps<typeof StyledInput>,
  {
    as?: never
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url'
  }
>

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ type = 'text', ...rest }, ref) => {
    if (type === 'number') {
      return (
        <StyledInput
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          ref={ref}
          {...rest}
        />
      )
    }

    return <StyledInput type={type} {...rest} ref={ref} />
  }
)

Input.displayName = 'Input'
