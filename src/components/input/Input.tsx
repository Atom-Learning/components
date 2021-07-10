import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledInput = styled('input', {
  boxShadow: 'none', // prevent default iOS default styling
  fontSize: '$md', // prevent iOS zooming on focus
  appearance: 'none',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  boxSizing: 'border-box',
  color: '$tonal800',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  height: '$4',
  px: '$3',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&:focus': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&[disabled]': {
    backgroundColor: '$tonal100',
    color: '$tonal600',
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
    name: string
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
