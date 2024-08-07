import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

import { Flex } from '../flex'
import { Text } from '../text'

export const InputBackground = styled(Flex, {
  background: 'white',
  color: '$grey1000',
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
      },
      xl: {
        height: '$6'
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

InputBackground.displayName = 'InputBackground'

const StyledInputText = styled.withConfig({
  shouldForwardStitchesProp: (propName) => ['as'].includes(propName)
})(Text as unknown as 'input', {
  // unsets
  appearance: 'none',
  border: 'none',
  background: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none', // prevent default iOS default styling
  boxSizing: 'border-box',
  '&:focus': {
    outline: 'none'
  },
  //
  px: '$3',
  size: '100%'
})

export type InputTextProps = Omit<
  React.ComponentProps<typeof StyledInputText>,
  'size' | 'type' | 'as'
> & {
  size: React.ComponentProps<typeof Text>['size']
  // override default 'type' property to prevent Input from being used to render
  // checkboxes, radios etc — we have dedicated components for them
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search'
  as?: never
}

const toTextSize = {
  sm: 'sm',
  md: 'md',
  lg: 'md',
  xl: 'lg'
}

export const InputText = React.forwardRef(
  (
    { type = 'text', css, size, ...rest }: InputTextProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const textSize = React.useMemo(
      () => overrideStitchesVariantValue(size, (s) => toTextSize[s]),
      [size]
    )

    return (
      <StyledInputText
        ref={ref}
        as="input"
        type={type === 'number' ? 'text' : type}
        inputMode={type === 'number' ? 'numeric' : undefined}
        pattern={type === 'number' ? '[0-9]*' : undefined}
        size={textSize}
        {...rest}
      />
    )
  }
)

InputText.displayName = 'InputText'

type InputBackgroundProps = React.ComponentProps<typeof InputBackground>
export type InputProps = Omit<
  React.ComponentProps<typeof InputText>,
  'size' | 'state'
> & {
  size?: InputBackgroundProps['size']
  state?: InputBackgroundProps['state']
}

export const Input = React.forwardRef(
  (
    { size = 'md', state, disabled, css, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputBackground size={size} disabled={disabled} state={state} css={css}>
        <InputText size={size} ref={ref} disabled={disabled} {...rest} />
      </InputBackground>
    )
  }
)

Input.displayName = 'Input'
