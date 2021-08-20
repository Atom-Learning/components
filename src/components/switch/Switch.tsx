import * as RadixSwitch from '@radix-ui/react-switch'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledSwitch = styled(RadixSwitch.Root, {
  appearance: 'none',
  backgroundColor: '$tonal200',
  border: 'none',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'flex',
  overflow: 'hidden',
  p: '$0',
  position: 'relative',
  transition: 'background-color 100ms ease',
  width: '$4',
  '&:hover': {
    backgroundColor: '$tonal300'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary'
  },
  '&[data-state="checked"]:hover': {
    backgroundColor: '$primaryMid'
  }
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  size: '$1',
  backgroundColor: 'white',
  borderRadius: '$round',
  transition: 'transform 100ms',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(calc($sizes$2 - $space$1))'
  }
})

type SwitchProps = React.ComponentProps<typeof StyledSwitch>

export const Switch: React.FC<SwitchProps> = (props) => (
  <StyledSwitch {...props}>
    <StyledThumb />
  </StyledSwitch>
)

Switch.displayName = 'Switch'
