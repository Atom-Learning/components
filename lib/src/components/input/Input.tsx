import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'
import { Override } from '~/utilities/types'

import { Box } from '../box'
import { Text } from '../text'

const StyledInputText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text as unknown as 'input', { // Trust in the output.
  // unsets
  appearance: 'none',
  border: 'none',
  background: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none', // prevent default iOS default styling
  '&:focus': {
    outline: 'none'
  },
  // '&[disabled]': disabledStyle,
  boxSizing: 'border-box',
  //
  size: '100%',
  color: '$grey1000', // Do I need?
  display: 'flex',
  alignItems: 'center',
  px: '$3',
  '&::placeholder': {
    color: '$grey700',
    opacity: 1
  }
})

export const StyledInputBackground = styled(Box, {
  border: '1px solid $grey800',
  borderRadius: '$0',
  transition: 'background 100ms ease-out, borderColor 100ms ease-out',
  width: '100%',
  '&:focus-within': {
    borderColor: '$blue800'
  },
  variants: {
    size: {
      sm: {
        height: '$3'
      },
      md: {
        height: '$4'
      },
      lg: {
        height: '$5'
      }
    },
    disabled: {
      true: disabledStyle
    },
    state: {
      error: {
        borderColor: '$danger'
      }
    }
  }
})

// override default 'type' property to prevent Input from being used to render
// checkboxes, radios etc — we have dedicated components for them
export type InputProps = Override<
  Omit<React.ComponentProps<typeof StyledInputText>, 'size'> & React.ComponentProps<typeof StyledInputBackground>,
  {
    name: string
    as?: never
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search',
    disabled: boolean
  }
>

const toTextSize = {
  sm: 'sm',
  md: 'md',
  lg: 'md',
}

export const Input = React.forwardRef(
  ({ type = 'text', size = 'md', state, disabled, css, ...rest }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {

    const textSize = React.useMemo(
      () => overrideStitchesVariantValue(size, (s) => toTextSize[s]),
      [size]
    )

    return (
      <StyledInputBackground
        size={size}
        state={state}
        disabled={disabled}
        css={css}
      >
        <StyledInputText
          size={textSize}
          ref={ref}
          as="input" // (*) Trust
          disabled={disabled}
          type={type === 'number' ? "text" : type}
          inputMode={type === 'number' ? "numeric" : undefined}
          pattern={type === 'number' ? "[0-9]*" : undefined}
          {...rest} />
      </StyledInputBackground>
    )
  }
)

Input.displayName = 'Input'
