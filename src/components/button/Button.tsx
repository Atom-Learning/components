import { StitchesComponent, StitchesVariants } from '@stitches/react'
import * as React from 'react'

import { styled } from '~/stitches'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  color: baseColor,
  backgroundColor: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    color: interactColor,
    backgroundColor: 'white'
  },
  '&:active': {
    color: baseColor
  },
  '&[disabled]': {
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
      outline: {
        boxShadow: 'inset 0 0 0 2px',
        backgroundColor: 'white',
        '&:not([disabled]):hover, &:not([disabled):focus': {
          textDecoration: 'none',
          backgroundColor: 'white'
        },
        '&[disabled]': { backgroundColor: 'white' }
      }
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

type ButtonProps = StitchesComponent<typeof StyledButton> &
  StitchesVariants<typeof StyledButton>

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  appearance = 'solid',
  ...rest
}) => <StyledButton theme={theme} appearance={appearance} {...rest} />

Button.displayName = 'Button'
