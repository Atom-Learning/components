import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

const BaseButton = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  border: 'none',
  borderRadius: '$1',
  padding: '$2 $4',
  width: 'max-content',
  fontSize: 'md',
  height: '$2',
  background: 'unset',
  transition: 'all 125ms ease-out',
  '&[disabled]': {
    backgroundColor: '$tonal700',
    color: '$tonal400',
    opacity: 0.35,
    cursor: 'default'
  },
  variants: {
    variant: {
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
      }
    },
    appearance: {
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
    variant: 'primary',
    appearance: 'outline'
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
    variant: 'secondary',
    appearance: 'outline'
  },
  {
    color: '$secondary500',
    '&:hover, &:focus': {
      color: '$secondary700'
    },
    ':active': {
      color: '$secodary500'
    },
    '&[disabled]': {
      color: '$secondary700'
    }
  }
)

BaseButton.compoundVariant(
  {
    variant: 'tertiary',
    appearance: 'outline'
  },
  {
    color: '$tertiary500',
    '&:hover, &:focus': {
      color: '$tertiary700'
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
  variant: 'primary'
}
