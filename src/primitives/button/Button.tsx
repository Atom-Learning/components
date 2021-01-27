import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

const BaseButton = styled('button', {
  borderRadius: '$1',
  border: 'none',
  padding: '$2 $4',
  width: 'max-content',
  fontSize: 'md',
  height: '$2',
  background: 'unset',
  cursor: 'pointer',
  transition: 'all 125ms ease-out',
  // TODO missing disabled states
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary500',
        color: 'white',
        '&:hover, &:focus': {
          backgroundColor: '$primary900'
        },
        ':active': {
          backgroundColor: '$primary500'
        }
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        '&:hover, &:focus': {
          backgroundColor: '$secondary700'
        },
        ':active': {
          backgroundColor: '$secondary500'
        }
      },
      tertiary: {
        backgroundColor: '$tertiary500',
        color: 'white',
        '&:hover, &:focus': {
          backgroundColor: '$tertiary700'
        },
        ':active': {
          backgroundColor: '$tertiary500'
        }
      }
    }
  }
})

type ButtonProps = StitchesProps<typeof BaseButton>

export const Button = (props: ButtonProps): React.ReactElement => {
  return <BaseButton {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  variant: 'primary'
}
