import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

const BaseButton = styled('button', {
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
  padding: '$2 $4',
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal600',
    opacity: 0.35,
    cursor: 'default'
  },
  variants: {
    theme: {
      primary: {
        backgroundColor: '$primary500',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$primary900'
        },
        ':active': {
          backgroundColor: '$primary500'
        }
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$secondary700'
        },
        ':active': {
          backgroundColor: '$secondary500'
        }
      },
      tertiary: {
        backgroundColor: '$tertiary500',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$tertiary700'
        },
        ':active': {
          backgroundColor: '$tertiary500'
        }
      },
      success: {
        backgroundColor: '$success',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$successDark'
        },
        ':active': {
          backgroundColor: '$success'
        }
      },
      warning: {
        backgroundColor: '$warning',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$warningDark'
        },
        ':active': {
          backgroundColor: '$warning'
        }
      },
      danger: {
        backgroundColor: '$danger',
        color: 'white',
        '&:not([disabled]):hover, &:not([disabled]):focus': {
          backgroundColor: '$dangerDark'
        },
        ':active': {
          backgroundColor: '$danger'
        }
      }
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

BaseButton.compoundVariant(
  {
    theme: 'primary',
    variant: 'outline'
  },
  {
    color: '$primary500',
    backgroundColor: 'white',
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      color: '$primary900',
      backgroundColor: 'white'
    },
    ':active': {
      color: '$primary500'
    },
    '&[disabled]': {
      color: '$primary900'
    }
  }
)

BaseButton.compoundVariant(
  {
    theme: 'secondary',
    variant: 'outline'
  },
  {
    color: '$secondary500',
    background: 'white',
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      color: '$secondary700',
      background: 'white'
    },
    ':active': {
      color: '$secondary500'
    },
    '&[disabled]': {
      color: '$secondary700'
    }
  }
)
BaseButton.compoundVariant(
  {
    theme: 'tertiary',
    variant: 'outline'
  },
  {
    color: '$tertiary500',
    background: 'white',
    '&:not([disabled]):hover, &:not([disabled]):focus': {
      color: '$tertiary700',
      background: 'white'
    },
    ':active': {
      color: '$tertiary500'
    },
    '&[disabled]': {
      color: '$tertiary700'
    }
  }
)

type ButtonProps = StitchesProps<typeof BaseButton>

export const Button = (props: ButtonProps): React.ReactElement => {
  return <BaseButton {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  theme: 'primary', // TODO: export this into an enum
  isLoading: false
}
