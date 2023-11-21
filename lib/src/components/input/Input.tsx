import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledInput = styled('input', {
  appearance: 'none',
  border: '1px solid $tonal400',
  borderRadius: '$0',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  color: '$tonal600',
  cursor: 'text',
  display: 'block',
  fontFamily: '$body',
  px: '$3',
  transition: 'all 100ms ease-out',
  width: '100%',
  '&:focus': {
    borderColor: '$primary',
    outline: 'none'
  },
  '&[disabled]': disabledStyle,
  '&::placeholder': {
    color: '$tonal300',
    opacity: 1
  },
  variants: {
    size: {
      sm: {
        height: '$3',
        fontSize: '$sm',
        lineHeight: 1.7
      },
      md: {
        height: '$4',
        fontSize: '$md',
        lineHeight: 2
      },
      lg: {
        height: '$5',
        fontSize: '$md',
        lineHeight: 2
      }
    },
    state: {
      error: {
        border: '1px solid $danger'
      }
    }
  }
})

// override default 'type' property to prevent Input from being used to render
// checkboxes, radios etc — we have dedicated components for them
export type InputProps = Override<
  React.ComponentProps<typeof StyledInput>,
  {
    name: string
    as?: never
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search'
  }
>

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ type = 'text', size = 'md', ...rest }, ref) => {
    if (type === 'number') {
      return (
        <StyledInput
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          size={size}
          {...rest}
          ref={ref}
        />
      )
    }

    return <StyledInput type={type} size={size} {...rest} ref={ref} />
  }
)

Input.displayName = 'Input'
