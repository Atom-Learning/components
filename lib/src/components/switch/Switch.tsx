import * as RadixSwitch from '@radix-ui/react-switch'
import * as React from 'react'

import { styled } from '~/stitches'
import { disabledStyle } from '~/utilities'

const StyledSwitch = styled(RadixSwitch.Root, {
  appearance: 'none',
  backgroundColor: '$tonal200',
  border: 'none',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 50ms ease-out',
  '&:hover': {
    backgroundColor: '$tonal300'
  },
  '&:focus': {
    outline: '2px solid $primary800',
    outlineOffset: '1px'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary800'
  },
  '&[data-state="checked"]:hover': {
    backgroundColor: '$primary900'
  },
  '&[disabled]': disabledStyle,
  variants: {
    size: {
      md: {
        p: '$0',
        width: '$4'
      },
      lg: {
        p: '$1',
        width: '$6'
      }
    }
  }
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  backgroundColor: 'white',
  borderRadius: '$round',
  display: 'block',
  transition: 'transform 50ms',
  willChange: 'transform',
  variants: {
    size: {
      md: {
        size: '$1',
        '&[data-state="checked"]': {
          transform: 'translateX(calc($sizes$2 - $space$1))'
        }
      },
      lg: {
        size: '$2',
        '&[data-state="checked"]': {
          transform: 'translateX($space$5)'
        }
      }
    }
  }
})

type SwitchProps = React.ComponentProps<typeof StyledSwitch>

export const Switch = ({ size = 'md', ...rest }: SwitchProps) => (
  <StyledSwitch size={size} {...rest}>
    <StyledThumb size={size} />
  </StyledSwitch>
)

Switch.displayName = 'Switch'
