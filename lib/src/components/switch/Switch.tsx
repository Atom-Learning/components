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
  transition: 'all 50ms ease-out',
  width: '$4',
  '&:hover': {
    backgroundColor: '$tonal300'
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '1px'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary'
  },
  '&[data-state="checked"]:hover': {
    backgroundColor: '$primaryMid'
  }
})

const StyledThumb = styled(RadixSwitch.Thumb, {
  backgroundColor: 'white',
  borderRadius: '$round',
  display: 'block',
  size: '$1',
  transition: 'transform 50ms',
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
