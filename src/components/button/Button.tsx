import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '~/stitches'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  color: baseColor,
  backgroundColor: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    color: interactColor,
    backgroundColor: 'white'
  },
  ':active': {
    color: baseColor
  },
  '&[disabled]': {
    color: interactColor
  }
})

const getButtonSolidVariant = (baseColor: string, interactColor: string) => ({
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal600'
  },
  backgroundColor: baseColor,
  color: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    backgroundColor: interactColor
  },
  ':active': {
    backgroundColor: baseColor
  }
})

const StyledButton = styled('button', {
  background: 'unset',
  border: 'none',
  borderRadius: '$1',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans',
  fontSize: 'md',
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
      primary: getButtonSolidVariant('$primary500', '$primary900'),
      secondary: getButtonSolidVariant('$secondary500', '$secondary700'),
      tertiary: getButtonSolidVariant('$tertiary500', '$tertiary700'),
      success: getButtonSolidVariant('$success', '$successDark'),
      warning: getButtonSolidVariant('$warning', '$warningDark'),
      danger: getButtonSolidVariant('$danger', '$dangerDark')
    },
    variant: {
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
  }
})

StyledButton.compoundVariant(
  {
    theme: 'primary',
    variant: 'outline'
  },
  getButtonOutlineVariant('$primary500', '$primary900')
)

StyledButton.compoundVariant(
  {
    theme: 'secondary',
    variant: 'outline'
  },
  getButtonOutlineVariant('$secondary500', '$secondary900')
)

StyledButton.compoundVariant(
  {
    theme: 'tertiary',
    variant: 'outline'
  },
  getButtonOutlineVariant('$tertiary500', '$tertiary700')
)

type ButtonProps = StitchesProps<typeof StyledButton>

export const Button = ({
  theme = 'primary',
  ...rest
}: ButtonProps): React.ReactElement => {
  return <StyledButton theme={theme} {...rest} />
}
