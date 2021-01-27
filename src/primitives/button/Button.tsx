import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

const StyledButton = {
  borderRadius: '$1',
  borderWidth: 0,
  padding: '$2 $4',
  width: '100%',
  color: 'white',
  fontSize: 'md',
  height: '40px',
  // TODO missing disabled states
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary500',
        color: 'white',
        ':hover': {
          backgroundColor: '$primary900'
        },
        ':focus': {
          backgroundColor: '$primary900'
        }
      },
      secondary: {
        backgroundColor: '$secondary500',
        color: 'white',
        ':hover': {
          backgroundColor: '$secondary700'
        },
        ':focus': {
          backgroundColor: '$secondary700'
        }
      },
      tertiary: {
        backgroundColor: '$tertiary500',
        ':hover': {
          backgroundColor: '$tertiary700'
        },
        ':focus': {
          backgroundColor: '$tertiary700'
        }
      }
    }
  }
}

const BaseButton = styled('button', StyledButton)

type ButtonProps = StitchesProps<typeof BaseButton>

export const Button = ({
  variant,
  ...props
}: ButtonProps): React.ReactElement => {
  return <BaseButton variant={variant || 'primary'} {...props} />
}

Button.displayName = 'Button'
