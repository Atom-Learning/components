import * as RadixSwitch from '@radix-ui/react-switch'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledSwitch = styled(RadixSwitch.Root, {
  appearance: 'none',
  backgroundColor: '$tonal400',
  border: 'none',
  padding: '$0',
  overflow: 'hidden',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'inline-flex',
  width: '$5',
  position: 'relative',
  transition: 'background-color 100ms ease',
  '&:focus': {
    outline: 'none'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$success'
  }
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  size: '$2',
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
