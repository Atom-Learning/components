import { StitchesVariants } from '@stitches/react'
import * as React from 'react'

import { Loader } from '~/components/loader'
import { styled } from '~/stitches'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  boxShadow: 'inset 0 0 0 2px',
  color: baseColor,
  backgroundColor: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    textDecoration: 'none',
    color: interactColor,
    backgroundColor: 'white'
  },
  '&:active': {
    color: baseColor
  },
  '&[disabled]': {
    backgroundColor: 'white',
    color: interactColor
  }
})

const getButtonSolidVariant = (baseColor: string, interactColor: string) => ({
  backgroundColor: baseColor,
  color: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    backgroundColor: interactColor
  },
  '&:active': {
    backgroundColor: baseColor
  },
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal600'
  }
})

const StyledButton = styled('button', {
  background: 'unset',
  border: 'none',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$sans',
  fontSize: '$md',
  fontWeight: 500,
  height: '$2',
  letterSpacing: '0.02em',
  lineHeight: 1.4,
  transition: 'all 125ms ease-out',
  textDecoration: 'none',
  px: '$4',
  py: '$2',
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&[disabled]': {
    opacity: 0.35,
    cursor: 'not-allowed'
  },
  '&.isLoading': {
    cursor: 'not-allowed',
    opacity: 0.5
  },
  '&:not(.isLoading) span': {
    opacity: 0,
    transition: 'opacity 100ms ease-out'
  },
  '&.isLoading span': {
    opacity: 1
  },
  variants: {
    theme: {
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},
      warning: {},
      danger: {}
    },
    appearance: {
      solid: {},
      outline: {}
    }
  },

  compoundVariants: [
    // Appearance Solid
    {
      theme: 'primary',
      appearance: 'solid',
      css: getButtonSolidVariant('$primary500', '$primary900')
    },
    {
      theme: 'secondary',
      appearance: 'solid',
      css: getButtonSolidVariant('$secondary500', '$secondary700')
    },
    {
      theme: 'tertiary',
      appearance: 'solid',
      css: getButtonSolidVariant('$tertiary500', '$tertiary700')
    },
    {
      theme: 'success',
      appearance: 'solid',
      css: getButtonSolidVariant('$success', '$successDark')
    },
    {
      theme: 'warning',
      appearance: 'solid',
      css: getButtonSolidVariant('$warning', '$warningDark')
    },
    {
      theme: 'danger',
      appearance: 'solid',
      css: getButtonSolidVariant('$danger', '$dangerDark')
    },

    // Appearance Outline
    {
      theme: 'primary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$primary500', '$primary900')
    },
    {
      theme: 'secondary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$secondary500', '$secondary900')
    },
    {
      theme: 'tertiary',
      appearance: 'outline',
      css: getButtonOutlineVariant('$tertiary500', '$tertiary700')
    }
  ]
})

type ButtonProps = React.ComponentPropsWithoutRef<typeof StyledButton> &
  StitchesVariants<typeof StyledButton> & {
    isLoading?: boolean
    onClick?: () => void
  }

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  appearance = 'solid',
  isLoading = false,
  type = 'button',
  children,
  onClick,
  ...rest
}) => {
  // Note: button is not disabled when loading for accessibility purposes.
  // Instead the clickAction is not fired and the button looks faded
  const handleClick = (callback) => {
    if (isLoading || !callback) {
      return
    }

    callback()
  }

  return (
    <StyledButton
      className={isLoading ? 'isLoading' : ''}
      theme={theme}
      appearance={appearance}
      onClick={() => handleClick(onClick)}
      type={type}
      {...rest}
    >
      {isLoading ? <Loader /> : children}
    </StyledButton>
  )
}

Button.displayName = 'Button'
